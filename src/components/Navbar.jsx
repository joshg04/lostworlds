import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50" onClick={closeMenu}>
            <span className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Lost Worlds
            </span>
          </Link>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/lost-gallery"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Lost Gallery
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/best-fits"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Best Fits
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
          <Link
            to="/products"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/lost-gallery"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Lost Gallery
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            About
          </Link>
          <Link
            to="/best-fits"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Best Fits
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
