import React, { useState } from "react";
import Column from "./Column";

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);
  const [updateTaskId, setUpdateTaskId] = useState(null);
  const [updateTaskTitle, setUpdateTaskTitle] = useState("");

  // Add a new task
  const handleAddTask = () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks
    const task = { id: Date.now(), title: newTask, column: 0 };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Handle drag start
  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  // Handle drop
  const handleDrop = (columnIndex) => {
    if (draggedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === draggedTask.id ? { ...task, column: columnIndex } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };

  // Handle delete task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Handle update task
  const handleUpdateTask = (taskId) => {
    setUpdateTaskId(taskId);
    const task = tasks.find((task) => task.id === taskId);
    setUpdateTaskTitle(task.title);
  };

  // Handle update task title
  const handleUpdateTaskTitle = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === updateTaskId ? { ...task, title: updateTaskTitle } : task
    );
    setTasks(updatedTasks);
    setUpdateTaskId(null);
    setUpdateTaskTitle("");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
      <h1 className="text-4xl font-bold mb-4">Kanban Board</h1>

      {/* Task input and add button */}
      <div className="flex mb-4 md:mb-8 lg:mb-12 xl:mb-16">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-2 border border-r-gray-0 border-gray-0 rounded mr-2 md:mr-4 lg:mr-6 xl:mr-8"
          placeholder="Add new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-4 xl:px-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7417 8.1 21.225C6.88333 20.6917 5.825 19.975 4.925 19.075C4.025 18.175 3.30833 17.1167 2.775 15.9C2.25833 14.6833 2 13.3833 2 12C2 10.6167 2.25833 9.31667 2.775 8.1C3.30833 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31667 8.1 2.8C9.31667 2.26667 10.6167 2 12 2C13.3833 2 14.6833 2.26667 15.9 2.8C17.1167 3.31667 18.175 4.025 19.075 4.925C19.975 5.825 20.6833 6.88333 21.2 8.1C21.7333 9.31667 22 10.6167 22 12C22 13.3833 21.7333 14.6833 21.2 15.9C20.6833 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6917 15.9 21.225C14.6833 21.7417 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="#1D1B20"
            />
          </svg>
        </button>
      </div>

      {/* Update task input and update button */}
      {updateTaskId && (
        <div className="flex mb-4 p-2 md:p-8 lg:p-12 xl:p-16">
          <input
            type="text"
            value={updateTaskTitle}
            onChange={(e) => setUpdateTaskTitle(e.target.value)}
            className="flex-grow p-5 border border-r-4 border-red-950 rounded mr-2 md:mr-4 lg:mr-6 xl:mr-8"
            placeholder="Update task title"
          />
          <button
            onClick={handleUpdateTaskTitle}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-10"
          >
            Update Task
          </button>
        </div>
      )}

      {/* Kanban Board */}
      <div className="flex flex-row justify-between mt-4 gap-4 p-8 md:p-12 lg:p-16 xl:p-20 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
        {/* Columns */}
        {["To-Do", "In Progress", "Done"].map((title, columnIndex) => (
          <Column
            key={columnIndex}
            title={title}
            columnIndex={columnIndex}
            tasks={tasks}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDeleteTask={handleDeleteTask}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
