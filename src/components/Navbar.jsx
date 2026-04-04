import { Link } from 'react-router-dom';
import { useState } from 'react';

const NAV_LINKS = [
  { to: '/products', label: 'PRODUCTS' },
  { to: '/lost-gallery', label: 'GALLERY' },
  { to: '/about', label: 'ABOUT' },
  { to: '/best-fits', label: 'BEST FITS' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#000011',
        borderBottom: '2px solid #00ffff',
        fontFamily: 'Impact, "Arial Black", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '52px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
            letterSpacing: '4px',
            textShadow: '0 0 10px rgba(0,255,255,0.8)',
          }}
        >
          ◄ LOST WORLDS ►
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: '4px', alignItems: 'center' }}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '11px',
                letterSpacing: '2px',
                padding: '5px 10px',
                border: '1px solid rgba(0,255,255,0.35)',
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,255,255,0.12)';
                e.currentTarget.style.borderColor = '#00ffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.35)';
              }}
            >
              [ {label} ]
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '1px solid #00ffff',
            color: '#00ffff',
            padding: '4px 10px',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: '#000011',
            borderTop: '1px solid rgba(0,255,255,0.2)',
            padding: '8px',
          }}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '13px',
                letterSpacing: '3px',
                padding: '10px 12px',
                borderBottom: '1px solid rgba(0,255,255,0.08)',
                fontFamily: 'Impact, "Arial Black", sans-serif',
              }}
            >
              → {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
