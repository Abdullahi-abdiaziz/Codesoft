import React, { useState } from "react";
import Task from "./Task";

function Tasks({ tasks, deleteTask, editTask, toggleComplete }) {
  const filterTasks = () => {
    return filter === "active"
      ? tasks.filter((task) => !task.completed)
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks;
  };
  const [filter, setFilter] = useState("all");

  return (
    <div>
      {tasks.length > 0 ? (
        <div className="filter_buttons">
          <button
            className={`${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            all <span>{tasks.length}</span>
          </button>
          <button
            className={`${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            active
            <span>
              {tasks.filter((task) => task.completed !== true).length}
            </span>
          </button>
          <button
            className={`${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            completed
            <span>
              {tasks.filter((task) => task.completed === true).length}
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
      <ul>
        {filterTasks().map((task, index) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={() => toggleComplete(task.id)}
            onEditTask={() => editTask(index)}
            onDeleteTask={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
