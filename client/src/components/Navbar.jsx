import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">LocalFix</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* TODO: Add authentication logic to toggle links */}
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link to="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
