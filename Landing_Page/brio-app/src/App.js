import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Register from "./component/Register";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div className="font-[poppins] bg-gradient-to-t from-[#fecaca] to-[#fef2f2] h-100%  w-screen">
      <Navbar />
      <Hero />
      <About />
      <Register />
      <Contact />
    </div>
  );
};

export default App;
