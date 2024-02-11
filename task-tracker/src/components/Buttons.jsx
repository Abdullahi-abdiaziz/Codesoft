import React from "react";

import addTaskImage from "../assets/plus.png";
import editTaskImage from "../assets/edit.png";

const Buttons = ({ onAddTask, editIndex }) => {
  return (
    <div onClick={onAddTask} className=" add_task df-start">
      {console.log(editIndex)}
      {editIndex !== null ? "Edit" : "Create"}
      {editIndex !== null ? (
        <img src={editTaskImage} alt="" />
      ) : (
        <img src={addTaskImage} alt="" />
      )}
    </div>
  );
};

export default Buttons;
