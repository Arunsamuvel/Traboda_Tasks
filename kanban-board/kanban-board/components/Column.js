import React from "react";

function Column({
  title,
  columnIndex,
  tasks,
  handleDragStart,
  handleDrop,
  handleDeleteTask,
  handleUpdateTask,
}) {
  // Filter tasks for this specific column
  const filteredTasks = tasks.filter((task) => task.column === columnIndex);

  return (
    <div
      onDragOver={(e) => e.preventDefault()} // Allow drop
      onDrop={() => handleDrop(columnIndex)} // Handle drop for this column
      className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded shadow-md"
    >
      {/* Column Title */}
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center text-gray-800">
        {title}
      </h2>

      {/* Task Container */}
      <div className="flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task)}
            className="bg-white p-3 sm:p-4 lg:p-5 rounded shadow hover:shadow-lg transition-shadow duration-200 cursor-move flex justify-between items-center"
          >
            {/* Task Title */}
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 flex-grow truncate">
              {task.title}
            </span>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {/* Edit Task */}
              <button
                onClick={() => handleUpdateTask(task.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-1 sm:p-2 rounded"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.06 2.94a3 3 0 1 1 4.24 4.24L8.18 17.3a4 4 0 0 1-1.4.93l-3.5 1.4 1.4-3.5c.18-.45.47-.86.83-1.2l10.55-10.54ZM12.05 5 14 7m5 14H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Delete Task */}
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-1 sm:p-2 rounded"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7h12M10 11v6m4-6v6M4 7h16M9 4h6m-6 0H5h4Zm6 0h4-4ZM5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
