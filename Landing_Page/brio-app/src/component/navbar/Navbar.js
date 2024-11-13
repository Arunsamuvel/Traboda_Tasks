import React from "react";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-(92%) mx-auto">
      <Logo />

      <ul className="flex items-center gap-[4vw]">
        <li>
          <a className="hover:text-red-700" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-red-700" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-red-700" href="#">
            Register
          </a>
        </li>
        <li>
          <a className="hover:text-red-700" href="#">
            Contact Us
          </a>
          
        </li>
        <button className="bg-[#ef4444] text-white px-5 py-2 rounded-full hover:bg-[#450a0a] gap-8">
          Sign In
        </button>
      </ul>
      <div className="">
        
      </div>
    </div>
  );
};

export default Navbar;
