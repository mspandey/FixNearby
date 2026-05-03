const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} LocalFix. Open Source Project.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">Contribute</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
