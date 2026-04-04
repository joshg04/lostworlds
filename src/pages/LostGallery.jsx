import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LostGallery = () => (
  <div
    style={{
      minHeight: '100vh',
      background: '#000011',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Courier New", Courier, monospace',
    }}
  >
    <Navbar />

    <div
      style={{
        flex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        padding: '80px 20px 40px',
      }}
    >
      {/* Page header panel */}
      <div
        style={{
          border: '2px solid #cc44ff',
          padding: '14px 20px',
          marginBottom: '24px',
          background: 'rgba(204,68,255,0.03)',
          position: 'relative',
        }}
      >
        <span style={{ position: 'absolute', top: -6, left: -6, color: '#cc44ff', fontSize: '10px' }}>◆</span>
        <span style={{ position: 'absolute', top: -6, right: -6, color: '#cc44ff', fontSize: '10px' }}>◆</span>
        <span style={{ position: 'absolute', bottom: -6, left: -6, color: '#cc44ff', fontSize: '10px' }}>◆</span>
        <span style={{ position: 'absolute', bottom: -6, right: -6, color: '#cc44ff', fontSize: '10px' }}>◆</span>
        <h1
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: 'clamp(26px, 5vw, 40px)',
            letterSpacing: '4px',
            color: '#cc44ff',
            margin: 0,
            textShadow: '0 0 14px rgba(204,68,255,0.5)',
          }}
        >
          ◄ LOST GALLERY ►
        </h1>
      </div>

      {/* Content panel */}
      <div
        style={{
          border: '1px solid #1a0022',
          padding: '24px',
          background: 'rgba(20,0,30,0.6)',
          lineHeight: 2,
          fontSize: '14px',
          color: '#9966aa',
        }}
      >
        <p>Explore our gallery...</p>
      </div>
    </div>

    <Footer />
  </div>
);

export default LostGallery;
