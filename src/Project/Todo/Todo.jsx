import React, { useEffect, useState } from "react";
import "../Todo/Todo.css";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import Datetime from "./Datetime";
import {  getlocalStorageTodo,  setlocalStorageTodo } from "./localStorage";

export default function Todo() {
  const [task, setTask] = useState(()=>getlocalStorageTodo() || []);

  const handleSubmit = (InputVal) => {
    const { id, content, checked } = InputVal;
    if (!content.trim()) return;
    const todoMatched = task.find((curTask) => curTask.content === content);
    if (todoMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //Todo LocalStorage
    
    setlocalStorageTodo(task);

  //Todo Delete
  const handleDelete = (value) => {
    const taskDelete = task.filter((targetVal) => targetVal.content !== value);
    setTask(taskDelete);
  };
  //Todo Checked
  const handleChecked = (content) => {
    const updateCheck = task.map((curTask) => {
      if (curTask.content === content) {
        return {...curTask, checked:!curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateCheck);
  };

  //HandleClear functionallity
  const handleClear = () => {
    setTask([]);
  };
  return (
    <section className="todo-container">
      <header>
        <h2>
          <center>Todo List</center>
        </h2>
        <Datetime />
      </header>
      <Todoform todoform={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (  
              <Todolist
                key={curTask.id}
                currTask={curTask.content}
                checked={curTask.checked}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
}
