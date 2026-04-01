// NOTE: Original lib.rs was lost due to APFS dataless file eviction.
// The IDL for this program is preserved at frontend/lib/solana/fractio-idl.json
// Program ID: 9UppnXx6fQQLz5g7cR2HAye38vSk3C5GANUTMd1aB5zm
//
// Modules implemented:
// 1. Property Registry - create/verify/suspend/close properties
// 2. Token Manager - purchase_tokens, transfer_tokens (KYC-gated)
// 3. Rental Distributor - deposit_rental, claim_rental, get_claimable_rental
// 4. Compliance Guard - whitelist_investor, revoke_investor

use anchor_lang::prelude::*;

declare_id!("9UppnXx6fQQLz5g7cR2HAye38vSk3C5GANUTMd1aB5zm");

#[program]
pub mod fractio {
    use super::*;
    // TODO: Restore from IDL at frontend/lib/solana/fractio-idl.json
}
