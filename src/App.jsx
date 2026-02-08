import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Products from './pages/Explore';
import LostGallery from './pages/LostGallery';
import BestFits from './pages/BestFits';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/lost-gallery" element={<LostGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/best-fits" element={<BestFits />} />
      </Routes>
    </Router>
  );
}

export default App;
