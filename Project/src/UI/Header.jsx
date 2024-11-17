import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex md:px-2  justify-around lg:px-42 lg:justify-evenly items-center h-20  md:hover:drop-shadow-2xl px-3 w-full">
      {/* Logo */}
      <NavLink to={"/"} className="md:px-2 flex items-center gap-3 md:gap-2">
        <img src="headphones.png" alt="headphone" className="h-10 sm:h-16 md:h-12" />
        <span className="xl:text-4xl text-xl md:text-2xlb lg:text-3xl font-bold md:text-2xl">SonicVibes</span>
      </NavLink>

      {/* Navbar Links (Toggles visibility based on screen size and isOpen state) */}
      <nav
        className={` xl:text-2xl  lg:h-10 lg:flex lg:gap-1 md:static md:flex lg:mx-2 lg:space-x-16 lg:text-xl md:bg-transparent gap-8 text-xl md:w-auto md:text-lg  flex flex-col items-center list-none  absolute top-20 w-full h-60 md:flex-row bg-[#20052cb0]  ${
          isOpen ? 'block' : 'hidden'}  md:block`}
      >

        <NavLink to={'/'}>
          <li className="hover:text-gray-300 my-1">Home</li>
        </NavLink>
        <NavLink to={'/About'}>
          <li className="hover:text-gray-300">About</li>
        </NavLink>
        <NavLink to={'/OurScience'}>
          <li className="hover:text-gray-300  ">Our Science</li>
        </NavLink>
        <NavLink to={'/Contact'}>
          <li className="hover:text-gray-300">Contact</li>
        </NavLink>
      </nav>

      {/* Sign In Button */}
      <NavLink to={'/SignIn'}>
        <li className="md:font-bold mx-5 left-8 md:left-5 list-none shadow-2xl  text-base bg-opacity-50 drop-shadow-xl text-gray-100 bg-transparent lg:px-10 lg:py-2 md:px-5 md:py-1 font-bold px-5 py-2 backdrop-blur-3xl rounded-3xl border hover:drop-shadow-2xl hover:transition duration-300 delay-150 hover:delay-100 hover:ring-2 ring-gray-500  md:text-xl active:bg-white ">
          Sign In
        </li>
      </NavLink>
      
            {/* Hamburger and Cross Icons (Visible on small screens) */}
      <div className="md:hidden">
        {isOpen ? (
          <GiCrossMark onClick={toggleMenu} className="text-3xl text-white cursor-pointer absolute right-4 top-6" />
        ) : (
          <GiHamburgerMenu onClick={toggleMenu} className="text-3xl text-white cursor-pointer absolute right-4 top-6" />
        )}
      </div>
    </header>
  );
}

export default Header;
