import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-blue-400 font-medium"
        : "hover:text-blue-400"
    }`;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            FixNearby
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Connecting you with trusted local service providers quickly and easily.
            Built for communities, powered by open source.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClass("/services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/bookings" className={linkClass("/bookings")}>
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass("/about")}>
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/help" className={linkClass("/help")}>
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={linkClass("/privacy")}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={linkClass("/terms")}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} FixNearby. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 mt-3 sm:mt-0">
          
          {/* GitHub */}
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="flex items-center gap-1 hover:text-blue-400 transition transform hover:scale-105"
          >
            <FaGithub />
            GitHub
          </a>

          {/* Contribute */}
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contribute to project"
            className="hover:text-blue-400 transition transform hover:scale-105"
          >
            Contribute
          </a>

          {/* Contact */}
          <Link
            to="/contact"
            aria-label="Contact Support"
            className="flex items-center gap-1 hover:text-blue-400 transition transform hover:scale-105"
          >
            <FaEnvelope />
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;