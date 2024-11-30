import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white w-full z-50">
      <div className="container mx-auto px-4">
        {/* Header Flex Container */}
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link
            to="/"
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            data-text="SonicVibes"
          >
            SonicVibes
          </Link>

          {/* Hamburger/Close Icon for Mobile */}
          <div className="menu-icon  cursor-pointer md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <GiCrossMark className="text-3xl  text-cyan-400" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-cyan-400" />
            )}
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex md: md:flex-row md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent px-6 md:px-0 z-40`}
          >
            <Link to="/" className="nav-link  py-2 text-2xl  font-bold md:py-0" data-text="Home">
              Home
            </Link>
            <Link to="/About" className="nav-link py-2 text-2xl font-bold  md:py-0" data-text="About">
              About
            </Link>
            <Link to="/OurScience" className="nav-link text-2xl font-bold  py-2 md:py-0" data-text="Our Science">
              Our Science
            </Link>
            <Link to="/Contact" className="nav-link py-2 text-2xl font-bold  md:py-0" data-text="Contact">
              Contact
            </Link>
            <Link
              to="/Login"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-xl"
            >
              Log In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
