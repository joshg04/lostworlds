import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-600">Get in touch with us...</p>
      </div>
    </div>
  );
};

export default Contact;
