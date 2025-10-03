import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Household Services</div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
