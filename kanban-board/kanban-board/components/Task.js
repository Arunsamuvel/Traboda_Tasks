import React from "react";

const Task = ({
  task,
  handleDragStart,
  handleDeleteTask,
  handleUpdateTask,
}) => {
  return (
    <div
      draggable
      onDragStart={() => handleDragStart(task)}
      className="bg-white p-3 md:p-4 lg:p-5 xl:p-6 mb-2 rounded shadow cursor-move flex flex-col md:flex-row justify-between items-start md:items-center"
    >
      {/* Task Title */}
      <span className="text-sm md:text-base lg:text-lg xl:text-xl font-medium flex-grow mb-2 md:mb-0">
        {task.title}
      </span>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Update Button */}
        <button
          onClick={() => handleUpdateTask(task.id)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded text-sm md:text-base lg:text-lg"
        >
          Update
        </button>

        {/* Delete Button */}
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded text-sm md:text-base lg:text-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
