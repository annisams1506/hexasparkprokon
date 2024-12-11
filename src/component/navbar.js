import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logoupi from "../images/alfat.png";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (e) => {
    window.scrollTo({ top: 0 });
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
    
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close the dropdown
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0});
    setMobileMenuOpen(false); // Close mobile menu if it's open
  };

  return (
    <nav className="bg-[#f4f4f4] fixed top-0 left-0 right-0 z-50 shadow-xl border-b-4 border-gray-100 h-20 flex items-center pl-4 md:pl-20">
      <div className="flex items-center space-x-4">
        <img src={logoupi} alt="Logo" className="h-10 ml-4 md:ml-[80px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-24 text-gray-800 font-ubuntu items-center justify-end mx-auto pl-36 ml-[120px]">
        <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
          About
        </Link>

        {/* Dropdown Menu */}
        <div className="relative">
          <Link
            to="/services"
            className="flex items-center text-gray-700 hover:text-gray-900"
            onClick={(e) => e.stopPropagation()} // Prevent conflict with dropdown
          >
            Services
          </Link>
          <button
            onClick={toggleDropdown}
            className="absolute top-1/2 transform -translate-y-1/2 right-[-20px] text-gray-700 hover:text-gray-900"
          
        >
            <FaChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-golden-55 shadow-lg rounded-md w-48">
              <ul className="py-2">
                <li onClick={closeDropdown}>
                  <Link
                    to="/pageconsul"
                    className="block px-4 py-2 bg-gray-200 hover:bg-white hover:text-golden-55 text-gray-900"
                    onClick={scrollToTop}
                  >
                    Surveying & Consulting Services
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    to="/foundation"
                    className="block px-4 py-2 bg-gray-200 hover:bg-white hover:text-golden-55 text-gray-900"
                    onClick={scrollToTop}
                  >
                    Foundation Services
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    to="/metal"
                    className="block px-4 py-2 bg-gray-200 hover:bg-white hover:text-golden-55 text-gray-900"
                    onClick={scrollToTop}
                  >
                    Metal & Structure Services
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    to="/port"
                    className="block px-4 py-2 bg-gray-200 hover:bg-white hover:text-golden-55 text-gray-900"
                    onClick={scrollToTop}
                  >
                    Port Services
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/project" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
          Projects & Clients
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end items-center w-full px-4">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-[#f4f4f4] z-50 flex flex-col items-center space-y-6 py-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
            Services
          </Link>
          <Link to="/project" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
            Projects & Clients
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={scrollToTop}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
