import React from "react";
import Logo from "./component/Logo/Logo";
import Draggable from "react-draggable";

const App = () => {
  return (
    <div className="font-[poppins] bg-gradient-to-t from-[#77CDFF] to-[#FFFFFF] h-screen  w-screen">
      <Logo />
      
      <Draggable>
        <div className="border border-red-900 w-32">
          I can now be moved around!
        </div>
      </Draggable>
    </div>
  );
};

export default App;
