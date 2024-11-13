import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-white shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div class="font-[newsreader] text-4xl text-red-900 p-10  font-semibold  md:order-1 hover:cursor-pointer">
          BRio
        </div>
        <div class="text-red-950 order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            <li class="md:px-4 md:py-2 hover:text-red-500">
              <a href="#">Home</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-red-500">
              <a href="#">About</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-red-500">
              <a href="#">Register</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-red-500">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3">
          <button class="px-4 py-2 bg-red-600 hover:bg-red-950 text-gray-50 rounded-xl flex items-center gap-2">
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
