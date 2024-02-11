import React, { useState } from "react";
import "./App.css";
import SelectPriority from "./components/SelectPriority";
import Input from "./components/Input";

import todoLogo from "./assets/todoLogo.svg";

import { colourOptions } from "./components/data";
import Tasks from "./components/Tasks";
import Buttons from "./components/Buttons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(colourOptions[3]);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: taskInput,
        completed: false,
        priority: selectedPriority.value,
      };

      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }

      if (selectedPriority === undefined) {
      }

      setTaskInput("");
    }
  };

  function toggleComplete(taskId) {
    const updatedTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  }

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskInput(taskToEdit.text);
    setEditIndex(index);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskId, 1);
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <>
      <div className="header">
        <img src={todoLogo} alt="" />
      </div>
      // create a code that defines the colors of the priority list    
      <div className="App">
        <div className="input_box">
          <Input
            value={taskInput}
            addTask={addTask}
            onChange={(e) => setTaskInput(e.target.value)}
          />

          <SelectPriority
            value={selectedPriority}
            onChange={setSelectedPriority}
          />
          <Buttons onAddTask={addTask} editIndex={editIndex} />
        </div>

        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  );
}

export default App;
