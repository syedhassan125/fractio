use anchor_lang::prelude::*;

declare_id!("9UppnXx6fQQLz5g7cR2HAye38vSk3C5GANUTMd1aB5zm");

#[program]
pub mod fractio {
    use super::*;

    // ── Property Registry ────────────────────────────────────────────────────

    pub fn create_property(
        ctx: Context<CreateProperty>,
        name: String,
        location: String,
        asset_type: AssetType,
        total_valuation: u64,
        total_tokens: u64,
        token_price: u64,
        expected_yield: u64,
        docs_ipfs_hash: String,
    ) -> Result<()> {
        require!(name.len() <= 64, FractioError::NameTooLong);
        require!(total_tokens > 0, FractioError::InvalidTokenAmount);
        require!(token_price > 0, FractioError::InvalidTokenPrice);
        require!(
            token_price.checked_mul(total_tokens).unwrap() == total_valuation,
            FractioError::ValuationMismatch
        );

        let property = &mut ctx.accounts.property;
        property.id = property.key();
        property.developer = ctx.accounts.developer.key();
        property.name = name;
        property.location = location;
        property.asset_type = asset_type;
        property.total_valuation = total_valuation;
        property.total_tokens = total_tokens;
        property.token_price = token_price;
        property.tokens_sold = 0;
        property.expected_yield = expected_yield;
        property.docs_ipfs_hash = docs_ipfs_hash;
        property.status = PropertyStatus::Pending;
        property.created_at = Clock::get()?.unix_timestamp;
        property.total_rental_deposited = 0;
        property.rental_per_token = 0;

        Ok(())
    }

    pub fn verify_property(ctx: Context<AdminProperty>) -> Result<()> {
        let property = &mut ctx.accounts.property;
        require!(
            property.status == PropertyStatus::Pending,
            FractioError::InvalidStatus
        );
        property.status = PropertyStatus::Active;
        Ok(())
    }

    pub fn suspend_property(ctx: Context<AdminProperty>) -> Result<()> {
        let property = &mut ctx.accounts.property;
        require!(
            property.status == PropertyStatus::Active || property.status == PropertyStatus::Funded,
            FractioError::InvalidStatus
        );
        property.status = PropertyStatus::Suspended;
        Ok(())
    }

    pub fn close_property(ctx: Context<CloseProperty>) -> Result<()> {
        let property = &mut ctx.accounts.property;
        require!(
            property.status != PropertyStatus::Closed,
            FractioError::InvalidStatus
        );
        property.status = PropertyStatus::Closed;
        Ok(())
    }

    // ── Token Manager ────────────────────────────────────────────────────────

    pub fn purchase_tokens(ctx: Context<PurchaseTokens>, amount: u64) -> Result<()> {
        require!(amount > 0, FractioError::InvalidTokenAmount);

        let property = &mut ctx.accounts.property;
        require!(
            property.status == PropertyStatus::Active,
            FractioError::PropertyNotActive
        );
        require!(
            property.tokens_sold.checked_add(amount).unwrap() <= property.total_tokens,
            FractioError::NotEnoughTokensAvailable
        );

        let compliance = &ctx.accounts.compliance;
        require!(compliance.is_verified, FractioError::InvestorNotVerified);

        let cost = amount.checked_mul(property.token_price).unwrap();

        // Transfer SOL from investor to developer
        let cpi_ctx = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            anchor_lang::system_program::Transfer {
                from: ctx.accounts.investor.to_account_info(),
                to: ctx.accounts.property.to_account_info(),
            },
        );
        anchor_lang::system_program::transfer(cpi_ctx, cost)?;

        property.tokens_sold = property.tokens_sold.checked_add(amount).unwrap();
        if property.tokens_sold == property.total_tokens {
            property.status = PropertyStatus::Funded;
        }

        let position = &mut ctx.accounts.investor_position;
        if position.tokens_held == 0 {
            position.investor = ctx.accounts.investor.key();
            position.property_id = property.key();
            position.investment_date = Clock::get()?.unix_timestamp;
            position.rental_debt = property.rental_per_token;
        } else {
            // Settle unclaimed rental before adding more tokens
            let claimable = property
                .rental_per_token
                .saturating_sub(position.rental_debt)
                .checked_mul(position.tokens_held)
                .unwrap();
            position.unclaimed_rental = position.unclaimed_rental.checked_add(claimable).unwrap();
            position.rental_debt = property.rental_per_token;
        }

        position.tokens_held = position.tokens_held.checked_add(amount).unwrap();
        position.total_invested = position.total_invested.checked_add(cost).unwrap();

        Ok(())
    }

    pub fn transfer_tokens(ctx: Context<TransferTokens>, amount: u64) -> Result<()> {
        require!(amount > 0, FractioError::InvalidTokenAmount);

        let from = &mut ctx.accounts.from_position;
        require!(from.tokens_held >= amount, FractioError::InsufficientTokenBalance);

        let to_compliance = &ctx.accounts.to_compliance;
        require!(to_compliance.is_verified, FractioError::InvestorNotVerified);

        from.tokens_held = from.tokens_held.checked_sub(amount).unwrap();

        let to = &mut ctx.accounts.to_position;
        to.tokens_held = to.tokens_held.checked_add(amount).unwrap();

        Ok(())
    }

    // ── Rental Distributor ───────────────────────────────────────────────────

    pub fn deposit_rental(ctx: Context<DepositRental>, amount: u64) -> Result<()> {
        require!(amount > 0, FractioError::InvalidRentalAmount);

        let property = &mut ctx.accounts.property;
        require!(property.tokens_sold > 0, FractioError::NoTokensSold);

        // Transfer SOL from developer to property account
        let cpi_ctx = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            anchor_lang::system_program::Transfer {
                from: ctx.accounts.developer.to_account_info(),
                to: property.to_account_info(),
            },
        );
        anchor_lang::system_program::transfer(cpi_ctx, amount)?;

        let per_token = amount.checked_div(property.tokens_sold).unwrap();
        property.rental_per_token = property.rental_per_token.checked_add(per_token).unwrap();
        property.total_rental_deposited = property.total_rental_deposited.checked_add(amount).unwrap();

        Ok(())
    }

    pub fn claim_rental(ctx: Context<ClaimRental>) -> Result<()> {
        let property = &ctx.accounts.property;
        let position = &mut ctx.accounts.investor_position;

        require!(position.tokens_held > 0, FractioError::NoTokensHeld);

        let accrued = property
            .rental_per_token
            .saturating_sub(position.rental_debt)
            .checked_mul(position.tokens_held)
            .unwrap();
        let claimable = accrued.checked_add(position.unclaimed_rental).unwrap();

        require!(claimable > 0, FractioError::NothingToClaim);

        // Transfer SOL from property account to investor
        **ctx.accounts.property.to_account_info().try_borrow_mut_lamports()? -= claimable;
        **ctx.accounts.investor.to_account_info().try_borrow_mut_lamports()? += claimable;

        position.total_rental_claimed = position.total_rental_claimed.checked_add(claimable).unwrap();
        position.unclaimed_rental = 0;
        position.rental_debt = property.rental_per_token;

        Ok(())
    }

    pub fn get_claimable_rental(ctx: Context<GetClaimableRental>) -> Result<u64> {
        let property = &ctx.accounts.property;
        let position = &ctx.accounts.investor_position;

        let accrued = property
            .rental_per_token
            .saturating_sub(position.rental_debt)
            .checked_mul(position.tokens_held)
            .unwrap_or(0);

        Ok(accrued.checked_add(position.unclaimed_rental).unwrap_or(0))
    }

    // ── Compliance Guard ─────────────────────────────────────────────────────

    pub fn whitelist_investor(
        ctx: Context<WhitelistInvestor>,
        kyc_level: u8,
        country: String,
    ) -> Result<()> {
        let compliance = &mut ctx.accounts.compliance;
        compliance.investor = ctx.accounts.investor.key();
        compliance.is_verified = true;
        compliance.kyc_level = kyc_level;
        compliance.country = country;
        compliance.verified_at = Clock::get()?.unix_timestamp;
        Ok(())
    }

    pub fn revoke_investor(ctx: Context<RevokeInvestor>) -> Result<()> {
        let compliance = &mut ctx.accounts.compliance;
        compliance.is_verified = false;
        Ok(())
    }
}

// ── Accounts ─────────────────────────────────────────────────────────────────

#[derive(Accounts)]
pub struct CreateProperty<'info> {
    #[account(init, payer = developer, space = 8 + Property::INIT_SPACE)]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub developer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AdminProperty<'info> {
    #[account(mut)]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct CloseProperty<'info> {
    #[account(mut, close = admin)]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct PurchaseTokens<'info> {
    #[account(mut)]
    pub property: Account<'info, Property>,
    #[account(
        init_if_needed,
        payer = investor,
        space = 8 + InvestorPosition::INIT_SPACE,
        seeds = [b"position", property.key().as_ref(), investor.key().as_ref()],
        bump
    )]
    pub investor_position: Account<'info, InvestorPosition>,
    pub compliance: Account<'info, ComplianceRecord>,
    #[account(mut)]
    pub investor: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct TransferTokens<'info> {
    #[account(mut)]
    pub from_position: Account<'info, InvestorPosition>,
    #[account(mut)]
    pub to_position: Account<'info, InvestorPosition>,
    pub to_compliance: Account<'info, ComplianceRecord>,
    #[account(mut)]
    pub from_investor: Signer<'info>,
}

#[derive(Accounts)]
pub struct DepositRental<'info> {
    #[account(mut)]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub developer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ClaimRental<'info> {
    #[account(mut)]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub investor_position: Account<'info, InvestorPosition>,
    #[account(mut)]
    pub investor: Signer<'info>,
}

#[derive(Accounts)]
pub struct GetClaimableRental<'info> {
    pub property: Account<'info, Property>,
    pub investor_position: Account<'info, InvestorPosition>,
}

#[derive(Accounts)]
pub struct WhitelistInvestor<'info> {
    #[account(
        init_if_needed,
        payer = admin,
        space = 8 + ComplianceRecord::INIT_SPACE,
        seeds = [b"compliance", investor.key().as_ref()],
        bump
    )]
    pub compliance: Account<'info, ComplianceRecord>,
    /// CHECK: read-only investor pubkey
    pub investor: UncheckedAccount<'info>,
    #[account(mut)]
    pub admin: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RevokeInvestor<'info> {
    #[account(mut)]
    pub compliance: Account<'info, ComplianceRecord>,
    #[account(mut)]
    pub admin: Signer<'info>,
}

// ── State ─────────────────────────────────────────────────────────────────────

#[account]
#[derive(InitSpace)]
pub struct Property {
    pub id: Pubkey,
    pub developer: Pubkey,
    #[max_len(64)]
    pub name: String,
    #[max_len(128)]
    pub location: String,
    pub asset_type: AssetType,
    pub total_valuation: u64,
    pub total_tokens: u64,
    pub token_price: u64,
    pub tokens_sold: u64,
    pub expected_yield: u64,
    #[max_len(64)]
    pub docs_ipfs_hash: String,
    pub status: PropertyStatus,
    pub created_at: i64,
    pub total_rental_deposited: u64,
    pub rental_per_token: u64,
}

#[account]
#[derive(InitSpace)]
pub struct InvestorPosition {
    pub investor: Pubkey,
    pub property_id: Pubkey,
    pub tokens_held: u64,
    pub total_invested: u64,
    pub total_rental_claimed: u64,
    pub unclaimed_rental: u64,
    pub investment_date: i64,
    pub rental_debt: u64,
}

#[account]
#[derive(InitSpace)]
pub struct ComplianceRecord {
    pub investor: Pubkey,
    pub is_verified: bool,
    pub kyc_level: u8,
    #[max_len(32)]
    pub country: String,
    pub verified_at: i64,
}

// ── Types ─────────────────────────────────────────────────────────────────────

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, InitSpace)]
pub enum AssetType {
    Residential,
    Commercial,
    Mixed,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, InitSpace)]
pub enum PropertyStatus {
    Pending,
    Active,
    Funded,
    Suspended,
    Closed,
}

// ── Errors ────────────────────────────────────────────────────────────────────

#[error_code]
pub enum FractioError {
    #[msg("Property name is too long")]
    NameTooLong,
    #[msg("Token amount must be greater than zero")]
    InvalidTokenAmount,
    #[msg("Token price must be greater than zero")]
    InvalidTokenPrice,
    #[msg("Token price x total tokens must equal total valuation")]
    ValuationMismatch,
    #[msg("Property is not in the correct status for this action")]
    InvalidStatus,
    #[msg("Property is not active for investment")]
    PropertyNotActive,
    #[msg("Not enough tokens available")]
    NotEnoughTokensAvailable,
    #[msg("Investor is not KYC verified")]
    InvestorNotVerified,
    #[msg("Insufficient token balance")]
    InsufficientTokenBalance,
    #[msg("Rental amount must be greater than zero")]
    InvalidRentalAmount,
    #[msg("No tokens have been sold yet")]
    NoTokensSold,
    #[msg("Investor holds no tokens")]
    NoTokensHeld,
    #[msg("Nothing to claim yet")]
    NothingToClaim,
}
