import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-900 p-10 text-gray-200">
      <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Column 1: Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
            <FaGraduationCap className="text-3xl text-orange-400" /> Academix
          </h2>
          <p className="mt-2 text-gray-300">Empowering Learning, Everywhere</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <span className="text-2xl text-orange-400 mb-4 block">Explore</span>
          <Link
            to="/about"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            Courses
          </Link>
          <Link
            to="/addCourse"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            Add Course
          </Link>
          <Link
            to="/myPopularCourse"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            My Popular Course
          </Link>
        </div>

        {/* Column 3: Support + Social Icons */}
        <div>
          <span className="text-2xl text-orange-400 mb-4 block">Support</span>
          <Link
            to="/my-enrollments"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            My Enrollments
          </Link>
          <Link
            to="/contactUs"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className="block mb-2 hover:text-orange-300 transition-colors duration-300"
          >
            FAQ
          </Link>

          <div className="flex gap-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
