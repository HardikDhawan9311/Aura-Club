// components/Navbar.jsx
import React from "react";

const navItems = ["Home", "Shop", "Our Story", "Get in Touch", "Gift Hampers"];

const Navbar = () => {
  return (
    <nav className="w-full z-50 bg-white border-b border-[#d6c2af] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ul className="flex justify-center gap-14 font-cinzel text-lg md:text-xl tracking-wide text-[#2b1a14] font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="transition transform duration-300 ease-in-out hover:scale-110 hover:text-[#8b5e3c] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
