import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( 
    <div className="navbar bg-gradient-to-r from-red-100 to-purple-100 sticky top-0 z-10">
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="navbar-start ml-5">
          <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold p-2">
            🛒shOOpy
          </h2>
        </div>

        {/* Menu icon for small screens */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links - shown on md and larger screens */}
        <div className="flex justify-around m-0 p-0">
        <div className={`navbar-end hidden md:flex gap-3`}>
          <Link
            to="/"
            className="text-lg lg:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold p-2"
          >
           Home
          </Link>
          <Link
            to="/products"
            className="text-lg lg:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold p-2"
          >
           Products
          </Link>
        </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="navbar-end md:hidden flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-lg">
          <Link
            to="/"
            className="text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
