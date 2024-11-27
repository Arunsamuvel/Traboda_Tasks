import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import Column from "./components/Column";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto p-4 w-screen h-screen bg-gradient-to-t from-[#0B0C10] to-[#FFFF]">
      <KanbanBoard className="bg-red-950 p-5 rounded-lg shadow-md"></KanbanBoard>
    </div>
  );
}
export default App;
