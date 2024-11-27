// src/App.js
import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./index.css"; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
