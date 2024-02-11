import React, { useState } from "react";
import unCompleteTask from "../assets/unchecked.png";



const inputRef = React.createRef();

const Input = ({ value, onChange, addTask }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
      inputRef.current.focus();
    }
  };
  return (
    <>
      <img src={unCompleteTask} alt="" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        ref={inputRef}
        placeholder="Create a task"
      />
    </>
  );
};

export default Input;
