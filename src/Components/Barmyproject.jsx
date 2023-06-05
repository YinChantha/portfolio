import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Barmyproject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    const handleResize = () => {
      checkScreenSize();
      setIsOpen(false); // Reset dropdown menu state
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    };
    checkScreenSize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="z-10 mt-32">
      <div className="flex justify-center mb-10">
        <div className="bg-gray-400 w-96 h-0.5 rounded-sm"></div>
      </div>
      <ul className="flex justify-start gap-6 ml-20 relative">
        <li className="group relative">
          {isLargeScreen ? (
            <div className="flex flex-row">
              <div className="px-4 py-2">
                <Link
                  to="/myproject/basicreact"
                  className="text-gray-600 hover:text-indigo-700 flex items-center"
                >
                  Basic React
                </Link>
              </div>
              <div className="px-4 py-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-700 flex items-center"
                >
                  Landingpage
                </Link>
              </div>
              <div className="px-4 py-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-700 items-center"
                >
                  Design
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <a
                href="#"
                className={`group text-gray-400 w-full transition font-abhaya font-semibold text-2xl duration-300 hover:text-indigo-700 flex items-center ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onClick={handleMenu}
              >
                <span>Projects</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-2 transition-transform duration-300 transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg">
                  <div className="px-4 py-2">
                    <Link
                      to="/myproject/basicreact"
                      className="text-gray-600 hover:text-indigo-700 flex items-center"
                    >
                      Basic React
                    </Link>
                  </div>
                  <div className="px-4 py-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-700 flex items-center"
                    >
                      Landingpage
                    </Link>
                  </div>
                  <div className="px-4 py-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-indigo-700 items-center"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Barmyproject;
