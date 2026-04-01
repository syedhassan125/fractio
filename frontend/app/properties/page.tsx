import Link from 'next/link'

const properties = [
  {
    id: 'seef-district-tower',
    badge: 'Hot',
    badgeType: 'hot',
    type: 'Commercial',
    location: 'Manama, Bahrain',
    name: 'Seef District Tower',
    tokenPrice: '$250',
    yield: '15.2%',
    value: '$2.4M',
    tokens: '847',
    progress: 65,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb6klUi-esAgr8X7HwBtWg5u9b20HF2TckmOsJvSoYdtwdTusfNEbDVnVjvwCk8gVvKw_qu9cthmKbr9PsjFIm2Qjk56DqCzM3jjPWMEyG4D6_Arr2F0l72x3uxTTiqWcrHnVy2lTyldqLHFUuXn6PWM5Ahp52glMzJdHq9xYgju66zBFWrG5uJS_lWLACLsq2taYSpLUzUQ64Bg5L8Cwo90Ja85q_BnvldqTIbz-Bj-wBvUD2pJK8KB9D_Wkmf81musMCjOJWw4s',
  },
  {
    id: 'kafd-commercial-hub',
    badge: 'New',
    badgeType: 'new',
    type: 'Commercial',
    location: 'Riyadh, Saudi Arabia',
    name: 'KAFD Commercial Hub',
    tokenPrice: '$500',
    yield: '12.8%',
    value: '$15.5M',
    tokens: '1,200',
    progress: 42,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdm_qoc_dYs9p5HlWq1cIN5L9ThItYIPXBFOZlpTZ-cuPAvxSzOuihFqGmCe5cAWC5EHxrP3NrZjeZrqgASFi6vN-b4Sp4m8tz7Z6pKvAUrZp4LFqO75eCg-7WRT1qqIk7-I4yjnvXm4dDngA_I4RkidglcvJsZ7G9lRUrvn_LsiIEqYQ6IUniM-M-DmAZLlQoIlihbJJpdXTUR5r18iZl_kQzlE71u84vxLyOBiMM3JpHdIZcXE8ITbM3IYprlnouEQxX9uzyqxw',
  },
  {
    id: 'emaar-business-park',
    badge: null,
    badgeType: null,
    type: 'Commercial',
    location: 'Dubai, UAE',
    name: 'Emaar Business Park',
    tokenPrice: '$400',
    yield: '11.5%',
    value: '$8.2M',
    tokens: '930',
    progress: 88,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9HXnEVYCW-c6zvRferv7wAzKlSiCaZPOLULqfp4TMHuQX49uKi5uq4o84ZEV4OLnBMOqjPb2E8RDq1Lp4QXvhY4LpRJqAqk5jvE04zW29J0ZSmEUlqX5y3oN8pcHNxgTz_-_M2gnJVRLwpS5YZpUzjOfrfyGbPhs91j81WVhOYfoSLoCOHJ62kC_Q-E3o5UgAVlzKDSaA0D4OQaOtErJVkZWNYMokrpf0KqCeyTWzUWo5YbjbMV3uWGnI9Dhl5vUrErXv4Ae8U',
  },
  {
    id: 'marina-heights',
    badge: null,
    badgeType: null,
    type: 'Residential',
    location: 'Dubai, UAE',
    name: 'Marina Heights',
    tokenPrice: '$350',
    yield: '9.8%',
    value: '$5.1M',
    tokens: '1,150',
    progress: 25,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97aXbp9ffzVE8asi5A3-WqAvdtzE_CP5Dcju5qzijqkkfKtFa7fNptq1mWgI4ytLzhsL0Ru3mINlQXz01N_0R9g2tOF8OUlUKr0DCkAzHrdyQPYqT0_8MzJgezEbReYeqNmTc--DscrN-ozyxtKxL9FhadMFiAhKoDDIqqSIoWrHqQXcRjtxYdUlTX0_A7b6dWz4SmeyvBin7eoip1XTNj7KZcQr5wMlh6EmOnQw29V0bcRxq5ZLP6wVglzAUH4Ls82koKSaUk4k',
  },
  {
    id: 'pearl-qatar-tower',
    badge: 'Hot',
    badgeType: 'hot',
    type: 'Mixed',
    location: 'Doha, Qatar',
    name: 'Pearl Qatar Tower',
    tokenPrice: '$600',
    yield: '14.1%',
    value: '$9.8M',
    tokens: '560',
    progress: 78,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNAyw9LrXVtESvnEj6B-fUiCuDpCNLsPijs5bOI83raIXO0CNSHHinAbwiYnxwjh2y59PKPVlDbT1jCvVZNWEciOfkpQkRNuCJMieR8pQW_Tzcp8cGx_c8gzKRRqFxg5xxml4c6kZkyy_4Wf33DeCCWDqFx0JaeOLKCbJiwZsUNXf1hxAYLobQB8SDyhdywHiE0fKmjJWlZAHlN7XcnPwCKdfrqypvFSit3xCWNAHxwEA9JmFcpoZtOMDs3d9C7QYlEWf27VTAx60',
  },
  {
    id: 'riyadh-gate',
    badge: null,
    badgeType: null,
    type: 'Residential',
    location: 'Riyadh, Saudi Arabia',
    name: 'Riyadh Gate',
    tokenPrice: '$300',
    yield: '10.5%',
    value: '$4.2M',
    tokens: '1,800',
    progress: 15,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtS97G9aoI93U8uSChEhsOzu0GNKrkMi36eNe9czVE9EnD1KrH-Xs4wMxhc06VcH_yQAsO0zVPhXEGzZXo5r6PMPA7NI_1_1b70yg-0N3BmGhjNja9vbvWkbIiv1Q2s8GwP6UL3Rh_EChyVJKdIor6qLht8FNSTRftf8KpypsZdFkNPfu7NMIGIG9oeQaz7MqFV5_msF15Ii7lBgMtcqOWl_Ry3lKTcGwT8IV9POm0-unOke9dt6lUMwbOLBmsF70AdIsaCsXW0DQ',
  },
]

const filterTabs = ['All', 'Bahrain', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait']

export default function PropertiesPage() {
  return (
    <div style={{ background: '#080807', color: '#F0EBE0', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(8,8,7,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 72,
      }}>
        <Link href="/">
          <span className="font-display" style={{ fontSize: '1.4rem', color: '#C9A84C', letterSpacing: '0.05em', cursor: 'pointer' }}>
            FRACTIO
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {[['/', 'Home'], ['/properties', 'Properties'], ['/dashboard', 'Dashboard']].map(([href, label]) => (
            <Link key={href} href={href}>
              <span style={{
                fontFamily: "'Josefin Sans', sans-serif", fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: href === '/properties' ? '#C9A84C' : 'rgba(240,235,224,0.55)',
                borderBottom: href === '/properties' ? '1px solid rgba(201,168,76,0.5)' : 'none',
                paddingBottom: href === '/properties' ? 2 : 0,
                cursor: 'pointer', transition: 'color 0.2s',
              }}>{label}</span>
            </Link>
          ))}
        </div>
        <Link href="/dashboard">
          <button className="btn-gold" style={{ padding: '10px 24px', borderRadius: 2, cursor: 'pointer', border: 'none' }}>
            My Portfolio
          </button>
        </Link>
      </nav>

      <main style={{ paddingTop: 72 }}>

        {/* Page Header */}
        <div style={{
          background: 'linear-gradient(180deg, #0F0E0C 0%, #080807 100%)',
          borderBottom: '1px solid rgba(201,168,76,0.08)',
          padding: '60px 40px 48px',
        }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div className="label" style={{ marginBottom: 12, color: '#C9A84C' }}>GCC Real Estate</div>
            <h1 className="font-display" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 8, lineHeight: 1.1 }}>
              Investment Properties
            </h1>
            <p style={{ fontFamily: "'Josefin Sans', sans-serif", color: 'rgba(240,235,224,0.5)', fontSize: '0.9rem', marginBottom: 40 }}>
              Fractional ownership in Bahrain, UAE, Saudi Arabia & beyond
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              {[
                { label: 'Listed Assets', value: '38' },
                { label: 'Avg. Annual Yield', value: '13.7%' },
                { label: 'Min. Investment', value: '$100' },
                { label: 'Total AUM', value: '$45.2M' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="label" style={{ marginBottom: 4 }}>{s.label}</div>
                  <div className="font-mono" style={{ fontSize: '1.3rem', color: '#C9A84C', fontWeight: 700 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{
          position: 'sticky', top: 72, zIndex: 40,
          background: 'rgba(11,10,9,0.97)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201,168,76,0.08)',
          padding: '16px 40px',
        }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {filterTabs.map((tab, i) => (
                <button key={tab} style={{
                  background: i === 0 ? 'rgba(201,168,76,0.12)' : 'transparent',
                  border: i === 0 ? '1px solid rgba(201,168,76,0.35)' : '1px solid rgba(201,168,76,0.1)',
                  color: i === 0 ? '#C9A84C' : 'rgba(240,235,224,0.5)',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', padding: '7px 16px', cursor: 'pointer',
                  borderRadius: 2, transition: 'all 0.2s',
                }}>{tab}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <select style={{
                background: '#0F0E0C', border: '1px solid rgba(201,168,76,0.15)',
                color: 'rgba(240,235,224,0.6)', fontFamily: "'Josefin Sans', sans-serif",
                fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em',
                textTransform: 'uppercase', padding: '7px 12px', cursor: 'pointer',
                borderRadius: 2,
              }}>
                <option>Yield: High to Low</option>
                <option>Price: Low to High</option>
                <option>Newest Listed</option>
              </select>
              <span className="font-mono" style={{ fontSize: '0.65rem', color: 'rgba(240,235,224,0.35)', letterSpacing: '0.1em' }}>
                6 of 38
              </span>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {properties.map((p) => (
              <Link key={p.id} href={`/properties/${p.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="card" style={{ borderRadius: 4, overflow: 'hidden', cursor: 'pointer' }}>
                  {/* Image */}
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    <img
                      src={p.img} alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(8,8,7,0.85) 0%, rgba(8,8,7,0.2) 50%, transparent 100%)',
                    }} />
                    {/* Badges */}
                    <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6 }}>
                      {p.badge && (
                        <span style={{
                          background: p.badgeType === 'hot' ? 'rgba(239,68,68,0.85)' : 'rgba(201,168,76,0.85)',
                          color: '#fff', fontFamily: "'Josefin Sans', sans-serif",
                          fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em',
                          textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2,
                        }}>{p.badge}</span>
                      )}
                      <span style={{
                        background: 'rgba(8,8,7,0.7)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        color: 'rgba(240,235,224,0.7)', fontFamily: "'Josefin Sans', sans-serif",
                        fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.15em',
                        textTransform: 'uppercase', padding: '3px 8px', borderRadius: 2,
                      }}>{p.type}</span>
                    </div>
                    {/* Location on image */}
                    <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                      <div className="label" style={{ color: 'rgba(201,168,76,0.8)', marginBottom: 4, fontSize: '0.6rem' }}>{p.location}</div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '18px 20px 20px' }}>
                    <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.04em', marginBottom: 16, lineHeight: 1.2 }}>
                      {p.name}
                    </h3>

                    {/* Metrics grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 16 }}>
                      <div>
                        <div className="label" style={{ marginBottom: 3, fontSize: '0.58rem' }}>Token Price</div>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: '#F0EBE0' }}>{p.tokenPrice}</div>
                      </div>
                      <div>
                        <div className="label" style={{ marginBottom: 3, fontSize: '0.58rem' }}>Annual Yield</div>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: '#C9A84C' }}>{p.yield}</div>
                      </div>
                      <div>
                        <div className="label" style={{ marginBottom: 3, fontSize: '0.58rem' }}>Asset Value</div>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: '#F0EBE0' }}>{p.value}</div>
                      </div>
                      <div>
                        <div className="label" style={{ marginBottom: 3, fontSize: '0.58rem' }}>Tokens Left</div>
                        <div className="font-mono" style={{ fontSize: '0.85rem', color: '#F0EBE0' }}>{p.tokens}</div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <div className="label" style={{ fontSize: '0.58rem' }}>Funding Progress</div>
                        <div className="font-mono" style={{ fontSize: '0.7rem', color: '#C9A84C' }}>{p.progress}%</div>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${p.progress}%` }} />
                      </div>
                    </div>

                    {/* CTA */}
                    <div style={{
                      textAlign: 'center', padding: '10px',
                      border: '1px solid rgba(201,168,76,0.2)',
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: '#C9A84C',
                      transition: 'all 0.2s',
                    }}>
                      View Property
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn-outline" style={{ padding: '14px 48px', borderRadius: 2, cursor: 'pointer', background: 'transparent' }}>
              Load More Properties
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0F0E0C', borderTop: '1px solid rgba(201,168,76,0.08)',
        padding: '40px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div className="font-display" style={{ fontSize: '1.1rem', color: '#C9A84C', letterSpacing: '0.06em', marginBottom: 6 }}>FRACTIO</div>
          <div className="font-mono" style={{ fontSize: '0.65rem', color: 'rgba(240,235,224,0.3)', letterSpacing: '0.1em' }}>© 2024 Fractio. All rights reserved.</div>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Terms of Service', 'Privacy Policy', 'Contact'].map((l) => (
            <a key={l} href="#" style={{
              fontFamily: "'Josefin Sans', sans-serif", fontSize: '0.65rem',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(240,235,224,0.4)', transition: 'color 0.2s',
            }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
