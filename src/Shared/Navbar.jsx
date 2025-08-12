import React, { useContext, useState } from "react";
import { NavLink } from "react-router"; 
import { AuthContexts } from "../contexts/AuthContexts";
import ThemeToggle from "../components/ThemeToggle";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContexts);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        setShowProfile(false);
        console.log("Signed out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-semibold"
              : "hover:text-orange-400 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-semibold"
              : "hover:text-orange-400 transition"
          }
        >
          Courses
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/my-enrollments"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-400 transition"
              }
            >
              My Enrollment Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCourse"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-400 transition"
              }
            >
              Add Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manageCourse"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-400 transition"
              }
            >
              Manage Course
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-blue-300 rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-white font-bold text-2xl hover:text-orange-400 transition"
          >
            <FaGraduationCap className="text-3xl" />
            Academix
          </NavLink>
        </div>

        {/* Menu Links - Desktop */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-white font-semibold gap-6">
          {links}
        </ul>

        {/* Right side - Theme toggle + User */}
        <div className="flex items-center gap-4 relative text-white">
          <ThemeToggle />
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                onClick={() => setShowProfile(!showProfile)}
                alt="profile"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:ring-2 ring-orange-400 transition"
              />
              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-900 p-4 rounded-lg shadow-lg border z-50">
                  <div className="text-center">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-12 h-12 mx-auto rounded-full mb-2 border"
                    />
                    <p className="font-bold">{user.displayName || "User"}</p>
                    <p className="text-sm text-gray-600 truncate">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error btn-sm w-full mt-4"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink
                to="/register"
                className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-blue-300 transition"
              >
                Register
              </NavLink>
              <NavLink
                to="/signIn"
                className="btn btn-sm bg-orange-500 border-none hover:bg-orange-600 text-white"
              >
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
