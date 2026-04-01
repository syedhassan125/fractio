import Link from 'next/link'

const holdings = [
  { name: 'Seef District Tower', id: 'seef-district-tower', tokens: 20, value: '$5,000', yield: '15.2%', monthly: '$63.33' },
  { name: 'KAFD Commercial Hub', id: 'kafd-commercial-hub', tokens: 15, value: '$4,500', yield: '14.8%', monthly: '$55.50' },
  { name: 'Emaar Business Park', id: 'emaar-business-park', tokens: 12, value: '$2,950', yield: '12.4%', monthly: '$30.47' },
]

const navItems = [
  { icon: '▦', label: 'Overview', active: true },
  { icon: '◈', label: 'Portfolio', active: false },
  { icon: '◎', label: 'Earnings', active: false },
  { icon: '≡', label: 'Transactions', active: false },
  { icon: '◇', label: 'KYC Status', active: false },
  { icon: '⚙', label: 'Settings', active: false },
]

export default function DashboardPage() {
  return (
    <div style={{ background: '#080807', color: '#F0EBE0', fontFamily: "'Josefin Sans', sans-serif", minHeight: '100vh', display: 'flex' }}>

      {/* SIDEBAR */}
      <aside style={{ width: 240, background: '#0D0C0A', borderRight: '1px solid rgba(201,168,76,0.08)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 50, flexShrink: 0 }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
          <Link href="/" className="font-display" style={{ fontSize: '1.2rem', color: '#C9A84C', letterSpacing: '0.15em', display: 'block', marginBottom: 4 }}>FRACTIO</Link>
          <div className="label" style={{ color: 'rgba(240,235,224,0.25)', fontSize: '0.6rem' }}>Investor Portal</div>
        </div>

        <nav style={{ flex: 1, padding: '16px 0' }}>
          {navItems.map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 24px', cursor: 'pointer',
              background: item.active ? 'rgba(201,168,76,0.06)' : 'transparent',
              borderRight: item.active ? '2px solid #C9A84C' : '2px solid transparent',
              transition: 'all 0.15s',
            }}>
              <span style={{ color: item.active ? '#C9A84C' : 'rgba(240,235,224,0.25)', fontSize: '0.9rem', width: 16, textAlign: 'center' }}>{item.icon}</span>
              <span className="label" style={{ color: item.active ? '#C9A84C' : 'rgba(240,235,224,0.35)', fontSize: '0.65rem', letterSpacing: '0.18em' }}>{item.label}</span>
            </div>
          ))}
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
          <button className="btn-gold" style={{ width: '100%', padding: '12px', cursor: 'pointer', marginBottom: 12, display: 'block', textAlign: 'center', fontSize: '0.65rem' }}>
            Connect Wallet
          </button>
          <div className="label" style={{ color: 'rgba(240,235,224,0.2)', textAlign: 'center', fontSize: '0.6rem' }}>Disconnect</div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 240, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* TOP BAR */}
        <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(8,8,7,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.08)', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <h2 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 400, color: '#F0EBE0' }}>Investor Dashboard</h2>
            <span style={{ fontSize: '0.82rem', color: 'rgba(240,235,224,0.3)', fontWeight: 300 }}>Welcome back, Syed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#111009', border: '1px solid rgba(74,222,128,0.2)' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
            <span className="font-mono" style={{ fontSize: '0.68rem', color: 'rgba(240,235,224,0.5)' }}>0x...Solana</span>
          </div>
        </header>

        <div style={{ padding: '48px', flex: 1 }}>

          {/* SUMMARY CARDS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginBottom: 48 }}>
            {[
              { label: 'Portfolio Value', value: '$12,450', sub: '+8.3% this month', subGold: false, subGreen: true, highlight: false },
              { label: 'Tokens Owned', value: '47', sub: 'Across 3 properties', subGold: false, subGreen: false, highlight: false },
              { label: 'Monthly Income', value: '$148.20', sub: 'Next payout in 8 days', subGold: false, subGreen: true, highlight: false },
              { label: 'Claimable Rental', value: '$89.40', sub: 'Claim Now →', subGold: true, subGreen: false, highlight: true },
            ].map(card => (
              <div key={card.label} style={{
                padding: '28px',
                background: card.highlight ? 'rgba(201,168,76,0.04)' : '#111009',
                border: `1px solid ${card.highlight ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.08)'}`,
              }}>
                <div className="label" style={{ marginBottom: 12 }}>{card.label}</div>
                <div className="font-display" style={{ fontSize: '1.8rem', color: card.highlight ? '#C9A84C' : '#F0EBE0', fontWeight: 400, marginBottom: 8 }}>{card.value}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 300, color: card.subGreen ? '#4ade80' : card.subGold ? '#C9A84C' : 'rgba(240,235,224,0.3)' }}>{card.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 2 }}>
            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

              {/* Holdings Table */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                  <h4 className="font-display" style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '0.08em' }}>Portfolio Holdings</h4>
                  <span className="badge-gold">Live</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                      {['Property', 'Tokens', 'Value', 'Yield', 'Monthly', 'Action'].map(h => (
                        <th key={h} className="label" style={{ padding: '0 0 16px', textAlign: h === 'Property' ? 'left' : 'right', fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((row, i) => (
                      <tr key={row.id} style={{ borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.05)' : 'none' }}>
                        <td style={{ padding: '18px 0' }}>
                          <span className="font-display" style={{ fontSize: '0.9rem', fontWeight: 400, color: '#F0EBE0' }}>{row.name}</span>
                        </td>
                        <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '18px 0', color: 'rgba(240,235,224,0.6)' }}>{row.tokens}</td>
                        <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '18px 0', color: '#C9A84C' }}>{row.value}</td>
                        <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '18px 0', color: '#4ade80' }}>{row.yield}</td>
                        <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '18px 0', color: 'rgba(240,235,224,0.6)' }}>{row.monthly}</td>
                        <td style={{ textAlign: 'right', padding: '18px 0' }}>
                          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                            <button className="label" style={{ color: '#C9A84C', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.6rem' }}>Claim</button>
                            <Link href={`/properties/${row.id}`} className="label" style={{ color: 'rgba(240,235,224,0.3)', fontSize: '0.6rem' }}>View</Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                      <td className="label" style={{ padding: '16px 0', color: 'rgba(240,235,224,0.3)' }}>Total Portfolio</td>
                      <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '16px 0', fontWeight: 700 }}>47</td>
                      <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', color: '#C9A84C', padding: '16px 0', fontWeight: 700 }}>$12,450</td>
                      <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', color: '#4ade80', padding: '16px 0' }}>14.3% avg</td>
                      <td className="font-mono" style={{ textAlign: 'right', fontSize: '0.82rem', padding: '16px 0' }}>$149.30/mo</td>
                      <td />
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Chart */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
                  <div>
                    <h4 className="font-display" style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '0.08em', marginBottom: 4 }}>Earnings Performance</h4>
                    <div className="label" style={{ color: 'rgba(240,235,224,0.3)' }}>Rental income — last 6 months</div>
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 24, height: 2, background: '#C9A84C' }} />
                      <span className="label" style={{ fontSize: '0.58rem' }}>Yield</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 12, height: 12, background: 'rgba(201,168,76,0.15)' }} />
                      <span className="label" style={{ fontSize: '0.58rem' }}>Income</span>
                    </div>
                  </div>
                </div>
                <div style={{ height: 180, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, paddingBottom: 32 }}>
                  {[
                    { h: 35, label: 'Jan' },
                    { h: 50, label: 'Feb' },
                    { h: 45, label: 'Mar' },
                    { h: 65, label: 'Apr' },
                    { h: 78, label: 'May' },
                    { h: 100, label: 'Jun' },
                  ].map((bar, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{ width: '60%', background: 'rgba(201,168,76,0.12)', borderTop: '2px solid rgba(201,168,76,0.3)', height: `${bar.h}%`, marginBottom: 12, transition: 'height 0.3s ease' }} />
                      <span className="label" style={{ fontSize: '0.58rem', color: 'rgba(240,235,224,0.3)', position: 'absolute', bottom: 0 }}>{bar.label}</span>
                    </div>
                  ))}
                  {/* SVG line overlay */}
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(100% - 32px)', overflow: 'visible' }} preserveAspectRatio="none">
                    <polyline fill="none" stroke="#C9A84C" strokeWidth="1.5" points="8%,117 24%,99 42%,104 58%,82 74%,61 90%,36" style={{ filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.4))' }} />
                    {[['8%','117'],['24%','99'],['42%','104'],['58%','82'],['74%','61'],['90%','36']].map(([x,y],i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#C9A84C" />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Transactions */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', padding: '32px' }}>
                <h4 className="font-display" style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '0.08em', marginBottom: 24 }}>Recent Activity</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { type: 'income', title: 'Rental Distribution', sub: 'Seef District Tower · 14 Jun 2024', amount: '+$63.33', green: true },
                    { type: 'purchase', title: 'Token Purchase', sub: 'KAFD Commercial Hub · 02 Jun 2024', amount: '15 tokens', green: false },
                    { type: 'income', title: 'Rental Distribution', sub: 'Emaar Business Park · 28 May 2024', amount: '+$30.47', green: true },
                  ].map((tx, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#0D0C0A', border: '1px solid rgba(201,168,76,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: tx.green ? 'rgba(74,222,128,0.08)' : 'rgba(201,168,76,0.08)', border: `1px solid ${tx.green ? 'rgba(74,222,128,0.15)' : 'rgba(201,168,76,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: tx.green ? '#4ade80' : '#C9A84C', flexShrink: 0 }}>
                          {tx.green ? '↓' : '◈'}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#F0EBE0', marginBottom: 3 }}>{tx.title}</div>
                          <div className="label" style={{ color: 'rgba(240,235,224,0.3)', fontSize: '0.58rem' }}>{tx.sub}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: tx.green ? '#4ade80' : '#C9A84C', marginBottom: 4 }}>{tx.amount}</div>
                        <span className="badge-green" style={{ fontSize: '0.55rem', padding: '2px 8px' }}>Confirmed</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-outline" style={{ width: '100%', padding: '12px', cursor: 'pointer', marginTop: 16, fontSize: '0.65rem', display: 'block', textAlign: 'center' }}>
                  Download Transaction History
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* KYC */}
              <div style={{ background: '#111009', border: '1px solid rgba(74,222,128,0.15)', padding: '28px' }}>
                <div className="label" style={{ marginBottom: 20, fontSize: '0.6rem' }}>KYC Compliance</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4ade80', flexShrink: 0 }}>✓</div>
                  <div>
                    <div className="font-display" style={{ fontSize: '0.95rem', color: '#F0EBE0', marginBottom: 4 }}>Verified Account</div>
                    <div style={{ fontSize: '0.72rem', color: '#4ade80', fontWeight: 300 }}>Tier 2 · Institutional Access</div>
                  </div>
                </div>
              </div>

              {/* Payout */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', borderLeft: '2px solid #C9A84C', padding: '28px' }}>
                <div className="label" style={{ marginBottom: 16, fontSize: '0.6rem' }}>Next Payout Cycle</div>
                <div className="font-display" style={{ fontSize: '2.4rem', color: '#C9A84C', letterSpacing: '0.05em', marginBottom: 8 }}>08 : 14</div>
                <div className="label" style={{ color: 'rgba(240,235,224,0.25)', marginBottom: 16, fontSize: '0.58rem' }}>Days · Hours remaining</div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.35)', lineHeight: 1.7, fontWeight: 300 }}>
                  Your next projected distribution of <span style={{ color: '#F0EBE0' }}>$148.20</span> will be credited to your Solana wallet.
                </p>
              </div>

              {/* Quick Actions */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', padding: '24px' }}>
                <div className="label" style={{ marginBottom: 16, fontSize: '0.6rem' }}>Quick Actions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href="/properties">
                    <button className="btn-gold" style={{ width: '100%', padding: '12px', cursor: 'pointer', display: 'block', textAlign: 'center', fontSize: '0.65rem' }}>Browse Properties</button>
                  </Link>
                  <button className="btn-outline" style={{ width: '100%', padding: '12px', cursor: 'pointer', display: 'block', textAlign: 'center', fontSize: '0.65rem' }}>Claim All Rental</button>
                </div>
              </div>

              {/* Market */}
              <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)', padding: '24px' }}>
                <div className="label" style={{ marginBottom: 20, fontSize: '0.6rem' }}>Market Index</div>
                {[
                  { label: 'REIT Index', val: '+1.24%', color: '#4ade80' },
                  { label: 'Solana Gas', val: '0.000005 SOL', color: 'rgba(240,235,224,0.4)' },
                  { label: 'USDC Yield', val: '4.8% APY', color: '#C9A84C' },
                ].map(t => (
                  <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: t.label !== 'USDC Yield' ? '1px solid rgba(201,168,76,0.05)' : 'none' }}>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.4)', fontWeight: 300 }}>{t.label}</span>
                    <span className="font-mono" style={{ fontSize: '0.72rem', color: t.color }}>{t.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="divider-gold" />
        <footer style={{ padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="label" style={{ color: 'rgba(240,235,224,0.2)', fontSize: '0.6rem' }}>© 2024 Fractio Protocol. All rights reserved.</div>
          <div className="label" style={{ color: 'rgba(240,235,224,0.15)', fontSize: '0.6rem' }}>Built on Solana</div>
        </footer>
      </main>
    </div>
  )
}
