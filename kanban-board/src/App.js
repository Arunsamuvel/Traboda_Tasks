import React from "react";
import Logo from "./component/Logo/Logo";
import Draggable from "react-draggable";
import SearchBar from "./component/context/SearchBar";

const App = () => {
  return (
    <div className="font-[poppins] bg-gradient-to-t from-[#77CDFF] to-[#FFFFFF] h-screen  w-screen md:">
      <div className="flex justify-between items-center ">
        <div className="">
          <Logo />
        </div>
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center justify-end gap-40">User login</div>
      </div>
    </div>
  );
};

export default App;
