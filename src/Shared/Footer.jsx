import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 p-10 text-base-content">
      <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <FaGraduationCap className="text-3xl text-primary" /> Academix
          </h2>
          <p className="mt-2">Empowering Learning, Everywhere</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <span className=" text-2xl text-blue-600">Explore</span>
          <Link
            to="/about"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            Courses
          </Link>
          <Link
            to="/addCourse"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            Add Course
          </Link>
          <Link
            to="/myPopularCourse"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            My Popular Course
          </Link>
        </div>

        {/* Column 3: Support + Social Icons */}
        <div>
          <span className=" text-2xl text-blue-600">Support</span>
          <Link
            to="/my-enrollments"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            My Enrollments
          </Link>
          <Link
            to="/contactUs"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className="link link-hover hover:text-blue-500 transition-colors duration-300"
          >
            FAQ
          </Link>

          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-primary hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-primary hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-primary hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
