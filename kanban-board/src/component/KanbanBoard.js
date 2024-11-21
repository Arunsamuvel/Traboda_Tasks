import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const KanbanBoard = () => {
  // using use state to declare the initial state of the board
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <h2 className="text-center">PROGRESS BOARD</h2>
      <div className="board flex justify-between items-center flex-row"></div>
    </DragDropContext>
  );
};

export default KanbanBoard;
