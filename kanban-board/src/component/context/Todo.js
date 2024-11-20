import React, { useState } from "react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  const [taskText, setTaskText] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // Add a new task
  const handleAddTask = (column) => {
    if (!taskText.trim()) return;

    setTasks({
      ...tasks,
      [column]: [...tasks[column], { id: Date.now(), text: taskText }],
    });
    setTaskText("");
  };

  // Edit a task
  const handleEditTask = (column, task) => {
    setTaskText(task.text);
    setEditingTask({ ...task, column });
  };

  // Update a task
  const handleUpdateTask = () => {
    const { column, id } = editingTask;

    setTasks({
      ...tasks,
      [column]: tasks[column].map((t) =>
        t.id === id ? { ...t, text: taskText } : t
      ),
    });
    setTaskText("");
    setEditingTask(null);
  };

  // Delete a task
  const handleDeleteTask = (column, id) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter((task) => task.id !== id),
    });
  };

  // Move task between columns
  const handleMoveTask = (fromColumn, toColumn, task) => {
    setTasks({
      ...tasks,
      [fromColumn]: tasks[fromColumn].filter((t) => t.id !== task.id),
      [toColumn]: [...tasks[toColumn], task],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Kanban Board</h1>

      {/* Add/Edit Task Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
        />
        <button
          onClick={editingTask ? handleUpdateTask : () => handleAddTask("todo")}
          className={`ml-2 px-4 py-2 rounded-lg ${
            editingTask
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {editingTask ? "Update" : "Add"}
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-3 gap-6">
        {Object.keys(tasks).map((column) => (
          <div key={column} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 capitalize">{column}</h2>

            <div className="space-y-3">
              {tasks[column].map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-200 p-3 rounded-lg flex justify-between items-center"
                >
                  <span>{task.text}</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEditTask(column, task)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(column, task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                    {column !== "todo" && (
                      <button
                        onClick={() => handleMoveTask(column, "todo", task)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        ←
                      </button>
                    )}
                    {column !== "done" && (
                      <button
                        onClick={() =>
                          handleMoveTask(
                            column,
                            column === "todo" ? "inProgress" : "done",
                            task
                          )
                        }
                        className="text-blue-500 hover:text-blue-700"
                      >
                        →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
