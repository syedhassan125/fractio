'use client'

import Link from 'next/link'

const featuredProperties = [
  { id: 'seef-district-tower', name: 'Seef District Tower', location: 'Manama, Bahrain', yield: '15.2%', price: '$250', value: '$2.4M', progress: 67, badge: 'HOT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb6klUi-esAgr8X7HwBtWg5u9b20HF2TckmOsJvSoYdtwdTusfNEbDVnVjvwCk8gVvKw_qu9cthmKbr9PsjFIm2Qjk56DqCzM3jjPWMEyG4D6_Arr2F0l72x3uxTTiqWcrHnVy2lTyldqLHFUuXn6PWM5Ahp52glMzJdHq9xYgju66zBFWrG5uJS_lWLACLsq2taYSpLUzUQ64Bg5L8Cwo90Ja85q_BnvldqTIbz-Bj-wBvUD2pJK8KB9D_Wkmf81musMCjOJWw4s' },
  { id: 'pearl-qatar-tower', name: 'Pearl Qatar Tower', location: 'Doha, Qatar', yield: '14.1%', price: '$600', value: '$9.8M', progress: 78, badge: 'HOT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNAyw9LrXVtESvnEj6B-fUiCuDpCNLsPijs5bOI83raIXO0CNSHHinAbwiYnxwjh2y59PKPVlDbT1jCvVZNWEciOfkpQkRNuCJMieR8pQW_Tzcp8cGx_c8gzKRRqFxg5xxml4c6kZkyy_4Wf33DeCCWDqFx0JaeOLKCbJiwZsUNXf1hxAYLobQB8SDyhdywHiE0fKmjJWlZAHlN7XcnPwCKdfrqypvFSit3xCWNAHxwEA9JmFcpoZtOMDs3d9C7QYlEWf27VTAx60' },
  { id: 'kafd-commercial-hub', name: 'KAFD Commercial Hub', location: 'Riyadh, Saudi Arabia', yield: '12.8%', price: '$500', value: '$15.5M', progress: 42, badge: 'NEW', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdm_qoc_dYs9p5HlWq1cIN5L9ThItYIPXBFOZlpTZ-cuPAvxSzOuihFqGmCe5cAWC5EHxrP3NrZjeZrqgASFi6vN-b4Sp4m8tz7Z6pKvAUrZp4LFqO75eCg-7WRT1qqIk7-I4yjnvXm4dDngA_I4RkidglcvJsZ7G9lRUrvn_LsiIEqYQ6IUniM-M-DmAZLlQoIlihbJJpdXTUR5r18iZl_kQzlE71u84vxLyOBiMM3JpHdIZcXE8ITbM3IYprlnouEQxX9uzyqxw' },
]

export default function Home() {
  return (
    <div style={{ background: '#080807', color: '#F0EBE0', fontFamily: "'Josefin Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(8,8,7,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="font-display" style={{ fontSize: '1.4rem', color: '#C9A84C', letterSpacing: '0.15em' }}>FRACTIO</span>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
            <Link href="/properties" className="label" style={{ color: 'rgba(240,235,224,0.6)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.6)')}>Properties</Link>
            <a href="#how-it-works" className="label" style={{ color: 'rgba(240,235,224,0.6)' }}>How It Works</a>
            <a href="#" className="label" style={{ color: 'rgba(240,235,224,0.6)' }}>About</a>
          </div>
          <Link href="/dashboard">
            <button className="btn-gold" style={{ padding: '10px 28px', cursor: 'pointer' }}>Dashboard</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 72, position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 48px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div className="badge-gold" style={{ display: 'inline-block', marginBottom: 32 }}>Solana Blockchain · GCC Properties</div>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: 28, color: '#F0EBE0', fontWeight: 400 }}>
                Own Premium<br />
                <span style={{ color: '#C9A84C' }}>Real Estate</span><br />
                From $100
              </h1>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(240,235,224,0.55)', maxWidth: 480, marginBottom: 48, fontWeight: 300 }}>
                Fractional ownership of tokenized GCC properties. Earn rental income automatically distributed to your wallet every month.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/properties">
                  <button className="btn-gold" style={{ padding: '14px 40px', cursor: 'pointer', fontSize: '0.75rem' }}>Browse Properties</button>
                </Link>
                <a href="#how-it-works">
                  <button className="btn-outline" style={{ padding: '14px 40px', cursor: 'pointer', fontSize: '0.75rem' }}>How It Works</button>
                </a>
              </div>

              {/* Mini stats */}
              <div style={{ display: 'flex', gap: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                {[['14.2%', 'Avg Annual Yield'], ['$100', 'Min Investment'], ['38', 'Live Properties']].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-display" style={{ fontSize: '1.8rem', color: '#C9A84C', fontWeight: 500, marginBottom: 4 }}>{val}</div>
                    <div className="label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Property cards stack */}
            <div style={{ position: 'relative', height: 500 }}>
              {/* Main card */}
              <div style={{ position: 'absolute', top: 0, left: 40, right: 0, borderRadius: 2, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb6klUi-esAgr8X7HwBtWg5u9b20HF2TckmOsJvSoYdtwdTusfNEbDVnVjvwCk8gVvKw_qu9cthmKbr9PsjFIm2Qjk56DqCzM3jjPWMEyG4D6_Arr2F0l72x3uxTTiqWcrHnVy2lTyldqLHFUuXn6PWM5Ahp52glMzJdHq9xYgju66zBFWrG5uJS_lWLACLsq2taYSpLUzUQ64Bg5L8Cwo90Ja85q_BnvldqTIbz-Bj-wBvUD2pJK8KB9D_Wkmf81musMCjOJWw4s" alt="Seef District Tower" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,7,0.85) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                    <div className="label" style={{ color: '#C9A84C', marginBottom: 4 }}>Manama, Bahrain</div>
                    <div className="font-display" style={{ fontSize: '1.2rem', color: '#F0EBE0' }}>Seef District Tower</div>
                  </div>
                </div>
                <div style={{ background: '#111009', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="label" style={{ marginBottom: 4 }}>Annual Yield</div>
                    <div className="font-display" style={{ fontSize: '1.4rem', color: '#C9A84C' }}>15.2%</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="label" style={{ marginBottom: 4 }}>Token Price</div>
                    <div className="font-mono" style={{ fontSize: '1rem', color: '#F0EBE0' }}>$250</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="label" style={{ marginBottom: 4 }}>Funded</div>
                    <div className="font-mono" style={{ fontSize: '1rem', color: '#4ade80' }}>67%</div>
                  </div>
                </div>
              </div>

              {/* Floating metrics */}
              <div style={{ position: 'absolute', bottom: 20, left: 0, background: '#111009', border: '1px solid rgba(201,168,76,0.2)', padding: '16px 20px', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
                <div className="label" style={{ marginBottom: 6, color: '#C9A84C' }}>284+ Investors</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(240,235,224,0.5)' }}>Currently active</div>
              </div>
              <div style={{ position: 'absolute', bottom: 100, left: 0, background: '#111009', border: '1px solid rgba(74,222,128,0.2)', padding: '12px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
                  <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 600, letterSpacing: '0.1em' }}>LIVE ON SOLANA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="divider-gold" />
      <section style={{ background: '#0D0C0A', padding: '48px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[['38', 'Properties Listed'],['$14.2M', 'Total Value Locked'],['12,400+', 'Tokens Issued'],['284+', 'Active Investors']].map(([val, label], i) => (
            <div key={label} style={{ padding: '24px 40px', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.08)' : 'none', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2rem', color: '#C9A84C', marginBottom: 8 }}>{val}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="divider-gold" />

      {/* FEATURED PROPERTIES */}
      <section style={{ padding: '120px 48px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div className="badge-gold" style={{ display: 'inline-block', marginBottom: 16 }}>Featured Assets</div>
            <h2 className="font-display" style={{ fontSize: '2.8rem', color: '#F0EBE0', fontWeight: 400 }}>Premium GCC Portfolio</h2>
          </div>
          <Link href="/properties" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#C9A84C', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            View All 38 Properties →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {featuredProperties.map((p) => (
            <Link key={p.id} href={`/properties/${p.id}`} style={{ display: 'block', cursor: 'pointer' }}>
              <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ height: 260, position: 'relative', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,7,0.9) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16 }}>
                    <span className="badge-gold">{p.badge}</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <div className="label" style={{ color: '#C9A84C', marginBottom: 6 }}>{p.location}</div>
                    <div className="font-display" style={{ fontSize: '1.1rem', color: '#F0EBE0', fontWeight: 400 }}>{p.name}</div>
                  </div>
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 20 }}>
                    {[['Token Price', p.price, false],['Annual Yield', p.yield, true],['Total Value', p.value, false],['Min Investment', '$100', false]].map(([label, val, gold]) => (
                      <div key={String(label)}>
                        <div className="label" style={{ marginBottom: 4 }}>{label}</div>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: gold ? '#C9A84C' : '#F0EBE0' }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span className="label">Funded</span>
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: '#C9A84C' }}>{p.progress}%</span>
                    </div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${p.progress}%` }} /></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: '#0D0C0A', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div className="badge-gold" style={{ display: 'inline-block', marginBottom: 16 }}>Simple Process</div>
            <h2 className="font-display" style={{ fontSize: '2.8rem', color: '#F0EBE0', fontWeight: 400 }}>Start Investing in 4 Steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {[
              { num: '01', title: 'Browse Properties', desc: 'Explore curated high-yield GCC commercial and residential assets with full transparency.' },
              { num: '02', title: 'Complete KYC', desc: 'Verify your identity through our institution-grade on-chain compliance in minutes.' },
              { num: '03', title: 'Purchase Tokens', desc: 'Buy fractional ownership tokens from $100 using USDC or other stablecoins.' },
              { num: '04', title: 'Earn Monthly', desc: 'Receive your share of rental income automatically distributed to your Solana wallet.' },
            ].map((step) => (
              <div key={step.num} style={{ padding: '48px 36px', background: '#111009', border: '1px solid rgba(201,168,76,0.08)', borderTop: '2px solid rgba(201,168,76,0.3)' }}>
                <div className="font-display" style={{ fontSize: '3rem', color: 'rgba(201,168,76,0.15)', marginBottom: 24, lineHeight: 1 }}>{step.num}</div>
                <h4 className="font-display" style={{ fontSize: '1rem', color: '#F0EBE0', marginBottom: 16, letterSpacing: '0.05em' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(240,235,224,0.45)', lineHeight: 1.8, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '140px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div className="badge-gold" style={{ display: 'inline-block', marginBottom: 24 }}>Get Started Today</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F0EBE0', marginBottom: 24, fontWeight: 400, lineHeight: 1.2 }}>
            Your Portfolio<br /><span style={{ color: '#C9A84C' }}>Starts Here</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,235,224,0.45)', marginBottom: 48, fontWeight: 300, lineHeight: 1.8 }}>
            Join 284+ investors earning passive income from premium GCC real estate on the Solana blockchain.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link href="/properties">
              <button className="btn-gold" style={{ padding: '16px 48px', cursor: 'pointer', fontSize: '0.75rem' }}>Browse Properties</button>
            </Link>
            <Link href="/dashboard">
              <button className="btn-outline" style={{ padding: '16px 48px', cursor: 'pointer', fontSize: '0.75rem' }}>Open Dashboard</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="divider-gold" />
      <footer style={{ background: '#080807', padding: '48px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="font-display" style={{ fontSize: '1.2rem', color: '#C9A84C', marginBottom: 8 }}>FRACTIO</div>
            <div className="label" style={{ color: 'rgba(240,235,224,0.3)' }}>Regulated · Blockchain-Secured · GCC Focus</div>
          </div>
          <div style={{ display: 'flex', gap: 40 }}>
            {['Privacy', 'Terms', 'Legal', 'Whitepaper'].map(l => (
              <a key={l} href="#" className="label" style={{ color: 'rgba(240,235,224,0.3)', transition: 'color 0.2s' }}>{l}</a>
            ))}
          </div>
          <div className="label" style={{ color: 'rgba(240,235,224,0.2)' }}>© 2024 Fractio. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}
