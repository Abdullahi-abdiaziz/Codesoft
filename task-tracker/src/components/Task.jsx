// Task.js
import React from "react";
import completeTask from "../assets/checked-task.png";
import unCompleteTask from "../assets/unchecked.png";
import editTask from "../assets/edit.png";
import deleteTask from "../assets/delete.png";

const Task = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  return (
    <li className={`${task.priority}`}>
      <div className="">
        <div onClick={onToggleComplete} className="task df-start">
          {task.completed ? (
            <img src={completeTask} alt="" />
          ) : (
            <img src={unCompleteTask} alt="" />
          )}
          <p className={task.completed ? "completed" : ""}>{task.text}</p>
        </div>
      </div>
      <div className="actions df-start">
        <img onClick={onEditTask} src={editTask} />
        <img onClick={onDeleteTask} src={deleteTask} />
      </div>
    </li>
  );
};

export default Task;
