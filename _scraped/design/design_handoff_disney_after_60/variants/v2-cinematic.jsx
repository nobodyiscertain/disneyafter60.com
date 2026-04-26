// V2 — Cinematic full-bleed
// Big imagery, dark sophisticated palette, large cards, gold accents.
// Feels like a luxury hospitality / Aman Resorts kind of brand.

const V2_PALETTE = {
  bg: '#0e1220',          // midnight castle blue
  surface: '#171b2c',
  ink: '#f4ede0',
  muted: 'rgba(244,237,224,0.65)',
  faint: 'rgba(244,237,224,0.18)',
  gold: '#d4a64a',
  rose: '#e8a4a4',
};

const V2_FONTS = {
  display: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
  body: '"Inter", "Helvetica Neue", system-ui, sans-serif',
};

function V2Cinematic({ heroVariant = 'A' }) {
  const s = V2_PALETTE, f = V2_FONTS;
  return (
    <div style={{ width: 1440, background: s.bg, color: s.ink, fontFamily: f.body, fontSize: 15 }}>
      {/* NAV — overlaying hero */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '32px 64px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Logo mark — interlocked D60 monogram in a gold circle */}
            <svg width="42" height="42" viewBox="0 0 42 42" aria-hidden="true">
              <circle cx="21" cy="21" r="20" fill="none" stroke={s.gold} strokeWidth="1" />
              <circle cx="21" cy="21" r="15" fill="none" stroke={s.gold} strokeWidth="0.5" opacity="0.5" />
              <text x="21" y="26" textAnchor="middle" fontFamily={f.display} fontStyle="italic" fontSize="18" fontWeight="400" fill={s.gold}>60</text>
            </svg>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: f.display, fontSize: 22, letterSpacing: '0.02em' }}>
                Disney <span style={{ fontStyle: 'italic', color: s.gold }}>After 60</span>
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.34em', textTransform: 'uppercase', color: s.muted, marginTop: 6 }}>
                Concierge Travel · Est. 2008
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 40, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span>Itineraries</span>
            <span>Resorts</span>
            <span>Dining</span>
            <span>Concierge</span>
          </div>
          <button style={{
            background: 'transparent', color: s.ink, border: `1px solid ${s.gold}`,
            padding: '12px 22px', fontSize: 12, letterSpacing: '0.14em',
            textTransform: 'uppercase', cursor: 'pointer',
          }}>Begin Planning</button>
        </div>

        {/* HERO image with overlay */}
        <V2Hero variant={heroVariant} s={s} f={f} />
      </div>

      {/* INTRO STATEMENT */}
      <div style={{ padding: '140px 64px 100px', textAlign: 'center', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: s.gold, marginBottom: 28 }}>Our Promise</div>
        <p style={{
          fontFamily: f.display, fontWeight: 300, fontSize: 44, lineHeight: 1.25,
          margin: 0, letterSpacing: '-0.01em',
        }}>
          Twenty years of planning Disney trips for grandparents, retirees, and golden-anniversary couples
          has taught us one thing — <span style={{ fontStyle: 'italic', color: s.gold }}>doing less is doing it right.</span>
        </p>
      </div>

      {/* SIGNATURE EXPERIENCES — 3 large cards */}
      <div style={{ padding: '40px 64px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48, paddingBottom: 24, borderBottom: `1px solid ${s.faint}` }}>
          <h2 style={{ fontFamily: f.display, fontWeight: 300, fontSize: 56, margin: 0, letterSpacing: '-0.01em' }}>
            Signature <span style={{ fontStyle: 'italic', color: s.gold }}>Itineraries</span>
          </h2>
          <span style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted }}>View all 14 →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { img: 'https://images.unsplash.com/photo-1597466765990-64ad1c35dafc?w=900&q=85', tag: '7 Nights', title: 'Monorail Loop', sub: 'Three deluxe resorts, no buses, every park within nine minutes.', price: 'from $4,820 / couple' },
            { img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=900&q=85', tag: '5 Nights', title: 'Epcot in Bloom',  sub: 'Flower &amp; Garden festival, World Showcase, evening fireworks cruise.', price: 'from $3,640 / couple' },
            { img: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=900&q=85', tag: '10 Nights', title: 'Disney by Sea',   sub: 'Three nights at Grand Floridian, then a Caribbean Disney Cruise.', price: 'from $7,200 / couple' },
          ].map((c,i) => (
            <div key={i} style={{ background: s.surface }}>
              <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
                <img src={c.img} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{
                  position: 'absolute', top: 20, left: 20, padding: '6px 12px',
                  background: 'rgba(14,18,32,0.7)', border: `1px solid ${s.gold}`,
                  fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.gold,
                }}>{c.tag}</div>
              </div>
              <div style={{ padding: '32px 28px 36px' }}>
                <h3 style={{ fontFamily: f.display, fontWeight: 400, fontSize: 32, margin: 0, letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ color: s.muted, fontSize: 14, lineHeight: 1.55, margin: '12px 0 24px' }} dangerouslySetInnerHTML={{ __html: c.sub }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 18, borderTop: `1px solid ${s.faint}` }}>
                  <span style={{ fontSize: 12, color: s.gold, letterSpacing: '0.06em' }}>{c.price}</span>
                  <span style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPLIT — "Why us" with portrait */}
      <div style={{ padding: '120px 64px', background: s.surface }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=900&q=85"
              alt=""
              style={{ width: '100%', height: 600, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              padding: '20px 24px', background: 'rgba(14,18,32,0.85)', borderLeft: `2px solid ${s.gold}`,
            }}>
              <div style={{ fontFamily: f.display, fontSize: 18, fontStyle: 'italic' }}>Carol &amp; James Whitaker</div>
              <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted, marginTop: 4 }}>
                Founders · Earmarked Diamond planners
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: s.gold, marginBottom: 24 }}>About</div>
            <h2 style={{ fontFamily: f.display, fontWeight: 300, fontSize: 64, lineHeight: 1.05, margin: 0, letterSpacing: '-0.01em' }}>
              We've been planning Disney for grandparents since <span style={{ fontStyle: 'italic', color: s.gold }}>2008.</span>
            </h2>
            <p style={{ color: s.muted, fontSize: 16, lineHeight: 1.7, marginTop: 28 }}>
              We know which resort buses run on time. Which restaurants have the quietest corner.
              Which rides are gentle, which are not, and which are worth the extra wait.
              We do this so you arrive without a checklist — only a plan that fits how you travel now.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 56 }}>
              {[
                ['18 yr', 'Authorized Disney Planner'],
                ['1,400+', 'Trips planned'],
                ['$0', 'Our planning fee'],
              ].map(([k,v],i) => (
                <div key={i} style={{ borderTop: `1px solid ${s.faint}`, paddingTop: 16 }}>
                  <div style={{ fontFamily: f.display, fontSize: 36, color: s.gold }}>{k}</div>
                  <div style={{ fontSize: 12, color: s.muted, marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS row */}
      <div style={{ padding: '120px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: s.gold }}>How it works</div>
          <h2 style={{ fontFamily: f.display, fontWeight: 300, fontSize: 56, margin: '20px 0 0', letterSpacing: '-0.01em' }}>
            From hello to <span style={{ fontStyle: 'italic', color: s.gold }}>Magic Kingdom</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            ['01', 'Conversation', 'A 30-minute call. We learn what magic looks like for you.'],
            ['02', 'Curated Plan', 'A draft itinerary in 48 hours — resort, dining, days at the parks.'],
            ['03', 'We Refine', 'Adjust until it feels right. We handle every booking.'],
            ['04', 'You Travel', 'Daily concierge by text. We are one call away, every day.'],
          ].map(([n,t,b],i,arr) => (
            <div key={i} style={{
              padding: '8px 28px', borderLeft: i ? `1px solid ${s.faint}` : 'none',
              borderRight: i === arr.length-1 ? `1px solid ${s.faint}` : 'none',
            }}>
              <div style={{ fontFamily: f.display, fontSize: 14, color: s.gold, letterSpacing: '0.18em' }}>{n}</div>
              <h3 style={{ fontFamily: f.display, fontWeight: 400, fontSize: 28, margin: '14px 0 12px', letterSpacing: '-0.01em' }}>{t}</h3>
              <p style={{ color: s.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: 'relative', height: 540, overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=1800&q=85" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,18,32,0.92), rgba(14,18,32,0.55))' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '0 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 720 }}>
          <h2 style={{ fontFamily: f.display, fontWeight: 300, fontSize: 64, lineHeight: 1.05, margin: 0, letterSpacing: '-0.01em' }}>
            Let us draft your <span style={{ fontStyle: 'italic', color: s.gold }}>perfect week.</span>
          </h2>
          <p style={{ color: s.muted, fontSize: 16, lineHeight: 1.6, marginTop: 20 }}>
            Tell us a little about your trip. We'll send a complete itinerary within 48 hours.
            No fees, no obligation, no pressure.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
            <button style={{
              background: s.gold, color: s.bg, border: 'none', padding: '18px 32px',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            }}>Request itinerary</button>
            <button style={{
              background: 'transparent', color: s.ink, border: `1px solid ${s.faint}`,
              padding: '18px 32px', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            }}>Schedule a call</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#080b16', color: s.ink, padding: '90px 64px 32px', borderTop: `1px solid ${s.faint}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 56, paddingBottom: 64, borderBottom: `1px solid ${s.faint}` }}>
          {/* Brand column */}
          <div>
            <div style={{ fontFamily: f.display, fontSize: 28, letterSpacing: '0.04em', marginBottom: 18 }}>
              Disney <span style={{ fontStyle: 'italic', color: s.gold }}>After Sixty</span>
            </div>
            <p style={{ color: s.muted, fontSize: 14, lineHeight: 1.65, margin: 0, maxWidth: 320 }}>
              Bespoke Walt Disney World &amp; Disney Cruise planning for travelers
              60 and beyond. An independent, Earmarked Diamond Authorized Disney
              Vacation Planner.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              {['IG', 'FB', 'YT', 'PT'].map(n => (
                <div key={n} style={{
                  width: 36, height: 36, borderRadius: '50%', border: `1px solid ${s.faint}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, letterSpacing: '0.08em', color: s.muted,
                }}>{n}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { h: 'Plan', items: ['Itineraries', 'Resorts', 'Disney Cruise', 'Adventures by Disney', 'Universal add-ons'] },
            { h: 'Concierge', items: ['Dining reservations', 'Lightning Lane', 'DAS guidance', 'ECV &amp; mobility', 'Accessible transport'] },
            { h: 'Resources', items: ['Field guide', 'Crowd calendar', 'Park comparison', 'First-timer FAQs', 'The journal'] },
            { h: 'Company', items: ['About Carol &amp; James', 'Reviews', 'Press', 'Contact', 'Schedule a call'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: s.gold, marginBottom: 22 }}>{col.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.items.map((it, j) => (
                  <span key={j} style={{ fontSize: 14, color: s.ink, opacity: 0.85, cursor: 'pointer' }} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, padding: '40px 0', borderBottom: `1px solid ${s.faint}` }}>
          <div>
            <div style={{ fontFamily: f.display, fontSize: 26, fontWeight: 300, letterSpacing: '-0.005em' }}>
              The Quiet List <span style={{ fontStyle: 'italic', color: s.gold }}>— our monthly letter.</span>
            </div>
            <p style={{ color: s.muted, fontSize: 13, lineHeight: 1.55, margin: '8px 0 0', maxWidth: 480 }}>
              One thoughtful email each month. New itineraries, off-peak windows, and the occasional table that just opened up.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, borderBottom: `1px solid ${s.gold}`, paddingBottom: 12, alignSelf: 'end' }}>
            <input
              placeholder="your@email.com"
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: s.ink, fontFamily: f.body, fontSize: 16, padding: '8px 0',
              }}
            />
            <button style={{
              background: 'transparent', color: s.gold, border: 'none',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', padding: 0,
            }}>Subscribe →</button>
          </div>
        </div>

        {/* Legal row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, fontSize: 11, color: s.muted, letterSpacing: '0.1em', textTransform: 'uppercase', flexWrap: 'wrap', gap: 16 }}>
          <div>© 2026 Disney After Sixty · An independent travel agency</div>
          <div style={{ display: 'flex', gap: 28 }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
            <span>Sitemap</span>
          </div>
          <div style={{ color: s.gold }}>◆ Earmarked Diamond · Authorized Disney Vacation Planner</div>
        </div>

        {/* Disclaimer */}
        <div style={{ paddingTop: 28, fontSize: 10.5, color: 'rgba(244,237,224,0.4)', lineHeight: 1.6, maxWidth: 1100 }}>
          Disney After Sixty is an independent travel agency and is not affiliated with, owned by, or in any way associated with The Walt Disney Company.
          As to Disney artwork, logos and properties: ©Disney. Ships of Disney Cruise Line registered in The Bahamas.
        </div>
      </div>
    </div>
  );
}

window.V2Cinematic = V2Cinematic;
