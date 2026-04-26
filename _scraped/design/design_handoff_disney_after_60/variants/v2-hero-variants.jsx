// V2 Hero variants — three distinct treatments of the castle hero.
// Shared by all three artboards. Reads palette/fonts from props so we
// keep one source of truth for V2 styling.

const HERO_IMG = 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1800&q=90';
const HERO_ALT = 'https://images.unsplash.com/photo-1597466765990-64ad1c35dafc?w=1800&q=90';

function V2Hero({ variant, s, f }) {
  if (variant === 'A') return <HeroDuotone s={s} f={f} />;
  if (variant === 'B') return <HeroSplit s={s} f={f} />;
  return <HeroSpotlight s={s} f={f} />;
}

// ─────────────────────────────────────────────────────────────
// A · Duotone Mask — tints the photo into the midnight+gold palette.
// Heavy color treatment unifies any photo to the page; reads as
// editorial / luxury hospitality. (Aman / Cereal energy.)
// ─────────────────────────────────────────────────────────────
function HeroDuotone({ s, f }) {
  return (
    <div style={{ position: 'relative', height: 820, overflow: 'hidden', background: s.bg }}>
      {/* Base image, desaturated */}
      <img
        src={HERO_IMG}
        alt=""
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: 'grayscale(0.85) contrast(1.05) brightness(0.85)',
        }}
      />
      {/* Duotone color wash — midnight in shadows, gold in highlights */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, rgba(14,18,32,0.85) 0%, rgba(23,27,44,0.6) 45%, rgba(212,166,74,0.28) 100%)`,
        mixBlendMode: 'multiply',
      }} />
      {/* Vignette + bottom fade for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at center, transparent 30%, rgba(14,18,32,0.45) 100%),
                     linear-gradient(180deg, rgba(14,18,32,0.5) 0%, transparent 30%, rgba(14,18,32,0.95) 100%)`,
      }} />
      {/* Gold film-grain hint via a subtle radial */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 70% 30%, rgba(212,166,74,0.18), transparent 55%)`,
      }} />

      <HeroCopy variant="A" s={s} f={f} />
      <HeroFooter s={s} label="Cinderella Castle · Magic Kingdom" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// B · Split — image lives in a framed window on the right; left
// is a solid midnight panel that owns the headline. Photo doesn't
// fight the page palette because most of the hero is the page palette.
// ─────────────────────────────────────────────────────────────
function HeroSplit({ s, f }) {
  return (
    <div style={{ position: 'relative', height: 820, background: s.bg, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* LEFT: solid panel, big serif */}
      <div style={{
        padding: '180px 64px 80px 80px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative',
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: s.gold, marginBottom: 36 }}>
          ✦ &nbsp;Bespoke Disney travel
        </div>
        <h1 style={{
          fontFamily: f.display, fontWeight: 300, fontSize: 108, lineHeight: 0.95,
          margin: 0, letterSpacing: '-0.02em',
        }}>
          The magic,<br />
          <span style={{ fontStyle: 'italic', color: s.gold }}>at your pace.</span>
        </h1>
        <p style={{ fontSize: 17, color: s.muted, maxWidth: 460, marginTop: 32, lineHeight: 1.6 }}>
          Concierge planning for travelers 60 and beyond.
          Curated itineraries. Comfortable resorts. Tables you'll want to linger at.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          <button style={{
            background: s.gold, color: s.bg, border: 'none', padding: '16px 28px',
            fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
          }}>Begin a consultation</button>
          <button style={{
            background: 'transparent', color: s.ink, border: `1px solid ${s.faint}`,
            padding: '16px 28px', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
          }}>View itineraries</button>
        </div>
        {/* Tiny rule + count */}
        <div style={{
          position: 'absolute', bottom: 60, left: 80, display: 'flex', alignItems: 'center', gap: 14,
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted,
        }}>
          <span style={{ width: 32, height: 1, background: s.gold }} />
          1,400+ trips planned since 2008
        </div>
      </div>
      {/* RIGHT: framed image */}
      <div style={{ padding: '120px 80px 60px 0', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          <img src={HERO_IMG} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: 'brightness(0.92) saturate(0.9)',
          }} />
          {/* Gold border frame */}
          <div style={{
            position: 'absolute', inset: 18, border: `1px solid ${s.gold}`, pointerEvents: 'none',
          }} />
          {/* Caption plate */}
          <div style={{
            position: 'absolute', bottom: 36, left: 36, padding: '14px 20px',
            background: 'rgba(14,18,32,0.85)', borderLeft: `2px solid ${s.gold}`,
          }}>
            <div style={{ fontFamily: f.display, fontSize: 18, fontStyle: 'italic' }}>Plate Nº 01</div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted, marginTop: 4 }}>
              Cinderella Castle · Magic Kingdom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// C · Spotlight — image as a centered framed portrait inside a
// solid midnight stage. Headline sits above; small caption below.
// Most editorial; treats the castle like a museum piece.
// ─────────────────────────────────────────────────────────────
function HeroSpotlight({ s, f }) {
  return (
    <div style={{ position: 'relative', height: 1000, background: s.bg, overflow: 'hidden' }}>
      {/* Soft gold glow behind image */}
      <div style={{
        position: 'absolute', top: '42%', left: '50%', width: 1100, height: 600,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse, rgba(212,166,74,0.22), transparent 65%)',
        filter: 'blur(20px)',
      }} />
      {/* Top headline */}
      <div style={{
        position: 'absolute', top: 200, left: 0, right: 0, textAlign: 'center', zIndex: 3,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: s.gold, marginBottom: 24 }}>
          ✦ &nbsp;Disney travel · Curated for 60 and beyond &nbsp;✦
        </div>
        <h1 style={{
          fontFamily: f.display, fontWeight: 300, fontSize: 116, lineHeight: 0.95,
          margin: 0, letterSpacing: '-0.02em',
        }}>
          The magic, <span style={{ fontStyle: 'italic', color: s.gold }}>at your pace.</span>
        </h1>
      </div>
      {/* Centered framed image */}
      <div style={{
        position: 'absolute', left: '50%', top: 460, transform: 'translateX(-50%)',
        width: 980, height: 460, zIndex: 2,
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
          <img src={HERO_IMG} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: 'brightness(0.94) saturate(0.85) contrast(1.05)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(14,18,32,0.15), rgba(14,18,32,0.55))',
          }} />
          <div style={{
            position: 'absolute', inset: 14, border: `1px solid rgba(212,166,74,0.5)`, pointerEvents: 'none',
          }} />
        </div>
        {/* Caption below image */}
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted }}>
          <span>Plate I · Cinderella Castle, Magic Kingdom</span>
          <span style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <span style={{ width: 28, height: 1, background: s.gold }} /> Begin Planning
          </span>
        </div>
      </div>
      {/* Decorative corner ornaments */}
      {[
        { top: 60, left: 60 }, { top: 60, right: 60 },
        { bottom: 60, left: 60 }, { bottom: 60, right: 60 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute', ...pos, width: 32, height: 32,
          borderTop: pos.top ? `1px solid ${s.gold}` : 'none',
          borderBottom: pos.bottom ? `1px solid ${s.gold}` : 'none',
          borderLeft: pos.left ? `1px solid ${s.gold}` : 'none',
          borderRight: pos.right ? `1px solid ${s.gold}` : 'none',
          opacity: 0.5,
        }} />
      ))}
    </div>
  );
}

// Shared overlay copy for variant A
function HeroCopy({ variant, s, f }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 140, textAlign: 'center', zIndex: 3,
    }}>
      <div style={{
        fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase',
        color: s.gold, marginBottom: 32,
      }}>
        ✦ &nbsp;Bespoke Disney travel for the well-rested traveler &nbsp;✦
      </div>
      <h1 style={{
        fontFamily: f.display, fontWeight: 300, fontSize: 132, lineHeight: 0.95,
        margin: 0, letterSpacing: '-0.02em',
      }}>
        The magic, <span style={{ fontStyle: 'italic' }}>at your pace.</span>
      </h1>
      <p style={{
        fontSize: 17, color: s.muted, maxWidth: 620, marginTop: 28, lineHeight: 1.55,
      }}>
        Concierge planning for travelers 60 and beyond.
        Curated itineraries. Comfortable resorts. Tables you'll want to linger at.
      </p>
    </div>
  );
}

function HeroFooter({ s, label }) {
  return (
    <>
      <div style={{
        position: 'absolute', bottom: 32, left: 64, fontSize: 11, color: s.muted, letterSpacing: '0.14em', textTransform: 'uppercase', zIndex: 3,
      }}>{label}</div>
      <div style={{
        position: 'absolute', bottom: 32, right: 64, fontSize: 11, color: s.muted, letterSpacing: '0.14em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 10, zIndex: 3,
      }}>Scroll &nbsp; <span style={{ width: 30, height: 1, background: s.gold }} /></div>
    </>
  );
}

window.V2Hero = V2Hero;
