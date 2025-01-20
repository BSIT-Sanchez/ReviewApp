import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to manage menu open/close
  const menuRef = useRef(null);  // Ref to handle outside clicks

  const subhover = "font-medium text-[18px] text-[#000000]";
  const mainHover = ({ isActive }) =>
    isActive ? "font-medium text-[18px] text-[#FF5900]" : subhover;

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#eeebeb] w-full">
      <div className="flex flex-wrap justify-between items-center container mx-auto py-4 px-4">
        {/* Logo */}
        <div className="flex justify-start items-center gap-[2px]">
          <h1 className="text-[#FF5900] font-bold text-[24px]">Teacher</h1>
          <h1 className="text-[#000000] font-bold text-[24px]">Review</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center items-center gap-5 cursor-pointer">
          <NavLink to="/" className={mainHover}>
            Home
          </NavLink>
          <NavLink to="/features" className={mainHover}>
            Features
          </NavLink>
          <NavLink to="/subscribe" className={mainHover}>
            Subscribe
          </NavLink>
          <NavLink to="/contact" className={mainHover}>
            Contact
          </NavLink>
          
          <NavLink to='/signin' className="bg-[#FF5900] hover:bg-[#FF7A33] text-[#fff] px-4 py-1 rounded-[4px] cursor-pointer transition duration-300">Sign In</NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="bg-[#FF5900] text-white px-2 py-1 rounded-[4px] cursor-pointer transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle the menu open/close
          >
            <FaBars className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <ul
            ref={menuRef}
            className="flex flex-col items-start gap-3 mt-4 w-full md:hidden bg-none p-4"
          >
            <NavLink
              to="/"
              className={mainHover}
              onClick={() => setIsMenuOpen(false)}  // Close the menu when link is clicked
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={mainHover}
              onClick={() => setIsMenuOpen(false)}  // Close the menu when link is clicked
            >
              Features
            </NavLink>
            <NavLink
              to="/subscribe"
              className={mainHover}
              onClick={() => setIsMenuOpen(false)}  // Close the menu when link is clicked
            >
              Subscribe
            </NavLink>
            <NavLink
              to="/contact"
              className={mainHover}
              onClick={() => setIsMenuOpen(false)}  // Close the menu when link is clicked
            >
              Contact
            </NavLink>
            <NavLink to='/signin' className="bg-[#FF5900] hover:bg-[#FF7A33] text-[#fff] px-4 py-1 rounded-[4px] cursor-pointer transition duration-300" onClick={() => setIsMenuOpen(false)}>Sign In</NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
