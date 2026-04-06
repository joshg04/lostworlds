import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const MARQUEE_TOP =
  '★ LOST WORLDS ★ EXPLORE THE COLLECTION ★ NEW DROPS AVAILABLE ★ FIND YOUR FIT ★ ';
const MARQUEE_BOT =
  '◈ THE OFFICIAL LOST WORLDS EXPERIENCE ◈ APPAREL FOR THE UNKNOWN ◈ EXPLORE ◈ DISCOVER ◈ ';

const MarqueeBand = ({ text, color, bg, reverse }) => {
  const content = text.repeat(20);
  return (
    <div
      style={{
        overflow: 'hidden',
        background: bg,
        borderTop: `2px solid ${color}`,
        borderBottom: `2px solid ${color}`,
        padding: '5px 0',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          fontFamily: 'Impact, "Arial Black", sans-serif',
          fontSize: '13px',
          letterSpacing: '3px',
          color,
          animation: `marquee 35s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {content}
      </div>
    </div>
  );
};

const PLANETS = [
  {
    to: '/products',
    label: 'EXPLORE',
    pos: { top: '18px', left: '50%', transform: 'translateX(-50%)' },
    gradient: 'radial-gradient(circle at 35% 35%, #ff9944, #cc4400, #661100)',
    glow: '#ff8833',
  },
  {
    to: '/lost-gallery',
    label: 'GALLERY',
    pos: { top: '50%', right: '18px', transform: 'translateY(-50%)' },
    gradient: 'radial-gradient(circle at 35% 35%, #cc55ff, #880099, #2d0044)',
    glow: '#cc44ff',
  },
  {
    to: '/best-fits',
    label: 'BEST FITS',
    pos: { bottom: '18px', left: '50%', transform: 'translateX(-50%)' },
    gradient: 'radial-gradient(circle at 35% 35%, #22ff99, #008844, #002211)',
    glow: '#00ff88',
  },
  {
    to: '/about',
    label: 'ABOUT US',
    pos: { top: '50%', left: '18px', transform: 'translateY(-50%)' },
    gradient: 'radial-gradient(circle at 35% 35%, #ffee33, #cc9900, #443300)',
    glow: '#ffdd00',
  },
];

const Hero = () => (
  <div
    style={{
      minHeight: '100vh',
      background: `url('${import.meta.env.BASE_URL}bg_stars.gif') repeat #000`,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Info bar */}
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#000022',
        borderBottom: '1px solid rgba(0,255,255,0.15)',
        padding: '5px 20px',
        textAlign: 'center',
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '10px',
        color: '#224455',
        letterSpacing: '3px',
      }}
    >
      LOST WORLDS INC. :: EST. MMXXIV :: THE OFFICIAL WEBSITE :: ENTER THE UNIVERSE
    </div>

    {/* Top marquee */}
    <div style={{ position: 'relative', zIndex: 10 }}>
      <MarqueeBand text={MARQUEE_TOP} color="#00ffff" bg="#000033" />
    </div>

    {/* Main hub */}
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div
          style={{
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '11px',
            letterSpacing: '10px',
            color: '#00ffff',
            marginBottom: '6px',
            opacity: 0.7,
          }}
        >
          ◄ WELCOME TO ►
        </div>
        <h1
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: 'clamp(54px, 11vw, 100px)',
            letterSpacing: '6px',
            margin: 0,
            lineHeight: 0.9,
            color: '#fff',
            animation: 'neon-glow-pink 3s ease-in-out infinite',
            textTransform: 'uppercase',
          }}
        >
          LOST
          <br />
          WORLDS
        </h1>
        <div
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: '13px',
            letterSpacing: '4px',
            color: '#ff44aa',
            animation: 'blink 1.2s step-end infinite',
            marginTop: '14px',
          }}
        >
          ★ NEW COLLECTION AVAILABLE NOW ★
        </div>
      </div>

      {/* Desktop hub */}
      <div className="hidden md:block">
        <div style={{ position: 'relative', width: '480px', height: '480px' }}>
          {/* Outer ring */}
          <div
            style={{
              position: 'absolute',
              width: '440px',
              height: '440px',
              top: '20px',
              left: '20px',
              border: '1px solid rgba(0,255,255,0.06)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          {/* Inner orbital ring */}
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              top: '60px',
              left: '60px',
              border: '1px dashed rgba(0,255,255,0.22)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          {/* Center globe */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 35% 35%, #4466ff, #001188, #000033)',
              boxShadow:
                '0 0 40px rgba(68,102,255,0.8), 0 0 80px rgba(68,102,255,0.3), inset -10px -10px 26px rgba(0,0,0,0.9)',
              border: '2px solid rgba(68,102,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                fontSize: '14px',
                letterSpacing: '2px',
                color: '#88aaff',
                textAlign: 'center',
                lineHeight: 1.4,
                textShadow: '0 0 8px #4466ff',
              }}
            >
              LOST
              <br />
              WORLDS
            </span>
          </div>

          {/* Planet nav items */}
          {PLANETS.map(({ to, label, pos, gradient, glow }) => (
            <Link
              key={to}
              to={to}
              style={{
                position: 'absolute',
                ...pos,
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '78px',
                  height: '78px',
                  borderRadius: '50%',
                  background: gradient,
                  boxShadow: `0 0 18px ${glow}, 0 0 36px ${glow}44, inset -5px -5px 14px rgba(0,0,0,0.8)`,
                  border: `2px solid ${glow}88`,
                }}
              />
              <span
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  color: glow,
                  textShadow: `0 0 8px ${glow}`,
                  textAlign: 'center',
                  maxWidth: '90px',
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden" style={{ width: '100%', maxWidth: '320px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {PLANETS.map(({ to, label, glow }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '13px 20px',
                fontFamily: 'Impact, "Arial Black", sans-serif',
                fontSize: '15px',
                letterSpacing: '4px',
                color: glow,
                border: `1px solid ${glow}88`,
                textDecoration: 'none',
                background: `${glow}11`,
                textShadow: `0 0 10px ${glow}`,
                boxShadow: `0 0 12px ${glow}22`,
              }}
            >
              [ {label} ]
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom marquee */}
    <div style={{ position: 'relative', zIndex: 10 }}>
      <MarqueeBand text={MARQUEE_BOT} color="#ff44aa" bg="#110011" reverse />
    </div>

    <Footer />
  </div>
);

export default Hero;
