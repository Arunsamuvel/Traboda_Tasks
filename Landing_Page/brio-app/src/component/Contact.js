import React from "react";
import Logo from "./logo/Logo";

const Contact = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Contact;
