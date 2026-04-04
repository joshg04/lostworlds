const SOCIALS = [
  { label: 'INSTA', href: '#', color: '#ff44aa' },
  { label: 'X', href: '#', color: '#00aaff' },
  { label: 'FB', href: '#', color: '#4488ff' },
  { label: 'YT', href: '#', color: '#ff4444' },
  { label: 'TIKTOK', href: '#', color: '#ff44cc' },
];

const Footer = () => (
  <footer
    style={{
      background: '#000011',
      borderTop: '2px solid #00ffff',
      padding: '24px 20px 18px',
      textAlign: 'center',
      fontFamily: '"Courier New", Courier, monospace',
    }}
  >
    <div
      style={{
        fontFamily: 'Impact, "Arial Black", sans-serif',
        fontSize: '20px',
        letterSpacing: '6px',
        color: '#00ffff',
        textShadow: '0 0 10px rgba(0,255,255,0.5)',
        marginBottom: '10px',
      }}
    >
      ★ LOST WORLDS ★
    </div>

    <div
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, #00ffff55, transparent)',
        marginBottom: '14px',
      }}
    />

    {/* Social links */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '14px',
        flexWrap: 'wrap',
      }}
    >
      {SOCIALS.map(({ label, href, color }) => (
        <a
          key={label}
          href={href}
          style={{
            color,
            textDecoration: 'none',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            padding: '3px 9px',
            border: `1px solid ${color}55`,
            textShadow: `0 0 8px ${color}88`,
          }}
        >
          [ {label} ]
        </a>
      ))}
    </div>

    <div
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, #00ffff44, transparent)',
        marginBottom: '12px',
      }}
    />

    <div
      style={{
        fontSize: '10px',
        color: '#2a4455',
        letterSpacing: '2px',
        lineHeight: 1.9,
      }}
    >
      © {new Date().getFullYear()} LOST WORLDS INC. :: ALL RIGHTS RESERVED
      <br />
      BEST VIEWED AT 800×600 IN NETSCAPE NAVIGATOR 4.0 :: THIS SITE IS Y2K COMPLIANT
    </div>

    <div
      style={{
        marginTop: '10px',
        fontSize: '10px',
        color: '#1a3344',
        letterSpacing: '1px',
      }}
    >
      YOU ARE VISITOR #{' '}
      <span style={{ color: '#00ff66', letterSpacing: '1px' }}>001337</span>
    </div>
  </footer>
);

export default Footer;
