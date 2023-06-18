import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [blurbackground, setBlurbackground] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
    setBlurbackground(!blurbackground);
  };

  const preventToggle = () => {
    setNavbar(false);
    setBlurbackground(false);
  };

  return (
    <div className={`h-screen`}>
      <nav
        className={`relative z-10 md:bg-none items-center ${
          blurbackground ? "bg-gray-900 bg-opacity-95 h-full" : ""
        }`}
      >
        <div className="flex items-center justify-end py-1 md:py-5 md:block">
          <div className="md:hidden">
            <button
              className="p-2 m-5 bg-gray-300 rounded-md focus:outline-none focus:border-gray-100 "
              onClick={toggleNavbar}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex justify-center items-center pb-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block " : "hidden"
          }`}
        >
          <ul className="items-center justify-center gap-10 space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li
              className="text-gray-400 hover:text-blue-600 "
              onClick={preventToggle}
            >
              <Link to="/" className="font-abhaya font-semibold text-3xl ">
                Home
              </Link>
            </li>
            <li
              className="text-gray-400 hover:text-blue-600"
              onClick={preventToggle}
            >
              <Link to="/about" className="font-abhaya font-semibold text-3xl">
                About
              </Link>
            </li>
            <li
              className="text-gray-400 hover:text-blue-600"
              onClick={preventToggle}
            >
              <Link
                to="/myproject"
                className="font-abhaya font-semibold text-3xl"
              >
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
