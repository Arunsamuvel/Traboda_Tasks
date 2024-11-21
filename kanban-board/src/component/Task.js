// src/Task.js
import React from "react";

const Task = ({ task }) => {
  return <div className="bg-white rounded shadow p-2 mb-2">{task.content}</div>;
};

export default Task;
