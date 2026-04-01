'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PropertyDetail() {
  const [tokens, setTokens] = useState(10)
  const tokenPrice = 250
  const annualYield = 0.152
  const totalTokens = 9600

  const total = tokens * tokenPrice
  const monthly = (total * annualYield) / 12
  const annual = total * annualYield
  const ownership = ((tokens / totalTokens) * 100).toFixed(3)
  const fiveYear = annual * 5

  return (
    <div style={{ background: '#080807', color: '#F0EBE0', fontFamily: "'Josefin Sans', sans-serif", minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(8,8,7,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/" className="font-display" style={{ fontSize: '1.1rem', color: '#C9A84C', letterSpacing: '0.15em' }}>FRACTIO</Link>
            <span style={{ color: 'rgba(240,235,224,0.2)' }}>/</span>
            <Link href="/properties" className="label" style={{ color: 'rgba(240,235,224,0.4)' }}>Properties</Link>
            <span style={{ color: 'rgba(240,235,224,0.2)' }}>/</span>
            <span className="label" style={{ color: '#C9A84C' }}>Seef District Tower</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#111009', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
            <span className="font-mono" style={{ fontSize: '0.7rem', color: 'rgba(240,235,224,0.6)' }}>0x...8E4a</span>
          </div>
        </div>
      </nav>

      {/* GALLERY */}
      <div style={{ height: 520, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2 }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOBTgJ176cFaLK9fPmDFzUh9ik2BEMdN8Yo6miOrvtZpQuoPWqtm1GM3M5gEF3KtkFXNoVLCA79TtFo72Fg9HpV59P4ViAeHtJP7yUTi1Txe7qBc8_Ez7QD6q230l1_w333RSdHio4sPRQGQqfqvn9tijhuvkB8LilT3Dve0KEZaH2bGEOTVv2eZtsbBy5E0jYzMr6IY6d4ehVEx4F1Xc-_1ppduef8D-o8uX2HeusqHq34pktHJoINRareADhAyNTDO_sRc66g1E" alt="Seef District Tower" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,7,0.9) 0%, transparent 50%)' }} />
          <div style={{ position: 'absolute', bottom: 40, left: 48 }}>
            <div className="badge-green" style={{ display: 'inline-block', marginBottom: 12 }}>● Live · Accepting Investments</div>
            <h1 className="font-display" style={{ fontSize: '2.4rem', color: '#F0EBE0', fontWeight: 400, marginBottom: 10, lineHeight: 1.2 }}>Seef District Tower</h1>
            <div className="label" style={{ color: '#C9A84C' }}>Manama, Bahrain &nbsp;·&nbsp; Commercial &nbsp;·&nbsp; 4,200 sqm &nbsp;·&nbsp; Est. 2019</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 2 }}>
          <div style={{ overflow: 'hidden' }}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDASPrbxcBY_5tLGq2vQHt5C4Ys3EAwriR11-2j08oaoJUKNZZkTD2fCipW7w3bbQnJ-Uo7unRqOI9iBf3475wczOMRo-poPE3kotpeKUduYIHCZgFKdbYJ-xTwlcW-sbbJHxiFQeACqLqv0ZxKVSQuXmxfNQCUb2A8Edpu3i5gvKNmW4jGtAjrwlY5Drrt3dIVl6eUm8Z0_vhAleJika1Z6LWbh_cDeub_3unD2I1nAjJWXNts7uHknBm9Odb758h_U4Qm6LR7_wc" alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfCHqWBWM7Nsoyu17dM8Kej6Ef8ylDnoGVpaCFtJe0naual0lEIOJLKUwbHZucTAO2fLbJpXC48C0HUSAbfrLkWg1k_D8xcdCajrexsOWMBm2tjkRdgH71UZXf0Waadi_J6RhQZT7USQzuFuprileRVdmaYJvxy2Ar_d1-CN5TWEeYgSl14h8Ub6eYnXw14_zUiskmqWaGggfZ3lIL_OpYVvaUmAn5X_t--lg5U--Und3vR0VWiqLgDHkv8qVTna3cAjpE7VyyOyI" alt="Skyline" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          </div>
        </div>
      </div>

      {/* METRICS ROW */}
      <div style={{ background: '#0D0C0A', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { label: 'Total Value', value: '$2.4M', gold: false },
            { label: 'Annual Yield', value: '15.2%', gold: true },
            { label: 'Token Price', value: '$250', gold: false },
            { label: 'Available Tokens', value: '847', gold: false },
          ].map((m, i) => (
            <div key={m.label} style={{ padding: '28px 40px', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.08)' : 'none' }}>
              <div className="label" style={{ marginBottom: 8 }}>{m.label}</div>
              <div className="font-display" style={{ fontSize: '1.6rem', color: m.gold ? '#C9A84C' : '#F0EBE0', fontWeight: 400 }}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 64, alignItems: 'start' }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Funding */}
          <div style={{ marginBottom: 56, padding: '32px', background: '#111009', border: '1px solid rgba(201,168,76,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span className="label" style={{ fontSize: '0.7rem' }}>Funding Progress</span>
              <span className="font-display" style={{ color: '#C9A84C', fontSize: '1.1rem' }}>67%</span>
            </div>
            <div className="progress-bar" style={{ height: 3, marginBottom: 12 }}>
              <div className="progress-fill" style={{ width: '67%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="label" style={{ color: '#4ade80' }}>$1.6M Raised</span>
              <span className="label">$2.4M Target</span>
            </div>
          </div>

          {/* About */}
          <div style={{ marginBottom: 56 }}>
            <h3 className="font-display" style={{ fontSize: '1.4rem', color: '#F0EBE0', fontWeight: 400, marginBottom: 24, letterSpacing: '0.05em' }}>Strategic Commercial Asset</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,224,0.5)', lineHeight: 1.9, marginBottom: 16, fontWeight: 300 }}>
              The Seef District Tower stands as a testament to Bahrain&apos;s rapid economic growth, located in the heart of Manama&apos;s most prestigious commercial hub. This A-grade office space offers unparalleled connectivity to the Bahrain Financial Harbour and international diplomatic missions.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,224,0.5)', lineHeight: 1.9, fontWeight: 300 }}>
              Currently boasting a 98% occupancy rate with long-term multinational tenants, the asset provides a robust combination of immediate rental yield and significant capital appreciation potential.
            </p>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 56 }}>
            {[
              { icon: '◎', title: 'Premium Location', desc: 'Prime Seef District access within walking distance to financial centers.' },
              { icon: '◈', title: 'Monthly Rental Income', desc: 'Direct participation in lease agreements, distributed automatically.' },
              { icon: '◇', title: 'KYC Protected', desc: 'Institutional-grade compliance with on-chain identity verification.' },
              { icon: '⬡', title: 'Blockchain Secured', desc: 'Immutable ownership records on Solana. Full on-chain transparency.' },
            ].map(f => (
              <div key={f.title} style={{ padding: '24px', background: '#111009', border: '1px solid rgba(201,168,76,0.08)' }}>
                <div style={{ fontSize: '1.2rem', color: '#C9A84C', marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F0EBE0', marginBottom: 8, letterSpacing: '0.05em' }}>{f.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.4)', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Legal Documents */}
          <div style={{ marginBottom: 56 }}>
            <h3 className="font-display" style={{ fontSize: '1.1rem', color: '#F0EBE0', fontWeight: 400, marginBottom: 20, letterSpacing: '0.08em' }}>Legal Documents</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { name: 'Title Deed', size: '4.2 MB', provider: 'RERA Bahrain' },
                { name: 'Valuation Report', size: '8.1 MB', provider: 'CBRE Group' },
                { name: 'RERA Certificate', size: '1.5 MB', provider: 'Govt Authority' },
                { name: 'Lease Summary', size: '2.8 MB', provider: 'Fractio Legal' },
              ].map(doc => (
                <div key={doc.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#111009', border: '1px solid rgba(201,168,76,0.08)', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#F0EBE0', marginBottom: 4 }}>{doc.name} PDF</div>
                    <div className="label" style={{ color: '#C9A84C' }}>{doc.size} · {doc.provider}</div>
                  </div>
                  <span style={{ color: 'rgba(240,235,224,0.3)', fontSize: '1rem' }}>↓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain */}
          <div>
            <h3 className="font-display" style={{ fontSize: '1.1rem', color: '#F0EBE0', fontWeight: 400, marginBottom: 20, letterSpacing: '0.08em' }}>Blockchain Details</h3>
            <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.08)' }}>
              {[
                { key: 'Network', val: 'Solana Mainnet' },
                { key: 'Program ID', val: '9UppnXx6fQQLz5g7cR2HAye38vSk3C5G...', gold: true },
                { key: 'Token Standard', val: 'SPL Token' },
                { key: 'Distribution', val: 'Monthly — 1st of each month' },
              ].map((r, i) => (
                <div key={r.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: i < 3 ? '1px solid rgba(201,168,76,0.06)' : 'none' }}>
                  <span className="label">{r.key}</span>
                  <span className="font-mono" style={{ fontSize: '0.78rem', color: r.gold ? '#C9A84C' : 'rgba(240,235,224,0.6)' }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ position: 'sticky', top: 80 }}>
          {/* Invest Card */}
          <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.2)', padding: '32px', marginBottom: 2, boxShadow: '0 0 40px rgba(201,168,76,0.05)' }}>
            <div className="badge-green" style={{ display: 'inline-block', marginBottom: 24 }}>● Live · Accepting Investments</div>

            {/* Token input */}
            <div style={{ marginBottom: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>Token Quantity</div>
              <div style={{ display: 'flex', alignItems: 'center', background: '#080807', border: '1px solid rgba(201,168,76,0.15)' }}>
                <button onClick={() => setTokens(Math.max(1, tokens - 1))} style={{ width: 48, height: 48, background: 'transparent', border: 'none', color: '#C9A84C', fontSize: '1.2rem', cursor: 'pointer', flexShrink: 0 }}>−</button>
                <div className="font-display" style={{ flex: 1, textAlign: 'center', fontSize: '1.4rem', color: '#F0EBE0' }}>{tokens}</div>
                <button onClick={() => setTokens(tokens + 1)} style={{ width: 48, height: 48, background: 'transparent', border: 'none', color: '#C9A84C', fontSize: '1.2rem', cursor: 'pointer', flexShrink: 0 }}>+</button>
              </div>
            </div>

            {/* Total */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', marginBottom: 24 }}>
              <span className="label">Total Investment</span>
              <span className="font-display" style={{ fontSize: '1.6rem', color: '#C9A84C' }}>${total.toLocaleString()}</span>
            </div>

            {/* ROI grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 24 }}>
              {[
                ['Monthly Income', `$${monthly.toFixed(2)}`],
                ['Annual Income', `$${annual.toFixed(2)}`],
                ['Ownership %', `${ownership}%`],
                ['5-Year Return', `$${fiveYear.toFixed(0)}`],
              ].map(([label, val]) => (
                <div key={String(label)} style={{ padding: '16px', background: '#080807', border: '1px solid rgba(201,168,76,0.06)' }}>
                  <div className="label" style={{ marginBottom: 6 }}>{label}</div>
                  <div className="font-mono" style={{ fontSize: '0.85rem', color: '#F0EBE0' }}>{val}</div>
                </div>
              ))}
            </div>

            <button className="btn-gold" style={{ width: '100%', padding: '16px', cursor: 'pointer', fontSize: '0.78rem', display: 'block', textAlign: 'center' }}>
              Purchase Tokens
            </button>
            <p style={{ fontSize: '0.7rem', color: 'rgba(240,235,224,0.25)', textAlign: 'center', marginTop: 16, lineHeight: 1.6, fontWeight: 300 }}>
              Investment involves risk. Yields estimated at 98% occupancy. Capital at risk.
            </p>
          </div>

          {/* Property Details */}
          <div style={{ background: '#111009', border: '1px solid rgba(201,168,76,0.1)', padding: '24px 28px' }}>
            <div className="label" style={{ color: '#C9A84C', marginBottom: 20, display: 'block' }}>Asset Overview</div>
            {[
              ['Asset Type', 'Commercial Office'],
              ['Location', 'Manama, Bahrain'],
              ['Size', '4,200 SQM'],
              ['Year Built', '2019'],
              ['Occupancy Rate', '98.4%'],
              ['Expected Yield', '15.2% APR'],
              ['Token Price', '$250.00'],
              ['Total Tokens', '9,600'],
              ['Distribution', 'Monthly'],
              ['Blockchain', 'Solana (SPL)'],
            ].map(([k, v], i) => (
              <div key={String(k)} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 9 ? '1px solid rgba(201,168,76,0.05)' : 'none' }}>
                <span style={{ fontSize: '0.78rem', color: 'rgba(240,235,224,0.4)', fontWeight: 300 }}>{k}</span>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: k === 'Occupancy Rate' ? '#4ade80' : 'rgba(240,235,224,0.7)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="divider-gold" />
      <footer style={{ background: '#080807', padding: '32px 48px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="font-display" style={{ fontSize: '1rem', color: '#C9A84C' }}>FRACTIO</span>
          <span className="label" style={{ color: 'rgba(240,235,224,0.2)' }}>© 2024 Fractio. All Rights Reserved. Built on Solana.</span>
        </div>
      </footer>
    </div>
  )
}
