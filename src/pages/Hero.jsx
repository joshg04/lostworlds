import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Background - Ready for image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Placeholder for future background image */}
        {/* You can add: style={{ backgroundImage: 'url(/path/to/image.jpg)' }} */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Discover Lost Worlds
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Embark on an epic journey through forgotten realms and ancient mysteries
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-base sm:text-lg">
              Start Exploring
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-base sm:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
