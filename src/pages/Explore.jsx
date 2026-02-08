import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Products</h1>
        <p className="text-base sm:text-lg text-gray-600">Explore our collection...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
