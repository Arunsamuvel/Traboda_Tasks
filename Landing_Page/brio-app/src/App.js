import React from "react";
import Navbar from "./component/navbar/Navbar";

import About from "./component/navbar/About";

const App = () => {
  return (
    <div className="font-[poppins] bg-gradient-to-t from-[#fecaca] to-[#fef2f2] h-screen ">
      <Navbar />

      <About />
    </div>
  );
};

export default App;
