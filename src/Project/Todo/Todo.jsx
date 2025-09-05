import React, { useEffect, useState } from "react";
import "../Todo/Todo.css";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import Datetime from "./Datetime";
import { getlocalStorageTodo, setlocalStorageTodo } from "./localStorage";

export default function Todo(props) {
  const [task, setTask] = useState(() => getlocalStorageTodo() || []);

  const handleSubmit = (InputVal) => {
    const { id, content, checked } = InputVal;
    if (!content.trim()) return;
    const todoMatched = task.find((curTask) => curTask.content === content);
    if (todoMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Save todos to localStorage
  useEffect(() => {
    setlocalStorageTodo(task);
  }, [task]);

  // Delete task
  const handleDelete = (value) => {
    const taskDelete = task.filter((targetVal) => targetVal.content !== value);
    setTask(taskDelete);
  };

  // Toggle checked
  const handleChecked = (content) => {
    const updateCheck = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateCheck);
  };

  // Clear all
  const handleClear = () => {
    setTask([]);
  };

  return (
    <section className={`todo-container bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
      <header>
        <h2 className="text-center">Todo List</h2>
        <Datetime />
      </header>
      <Todoform todoform={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <Todolist
              key={curTask.id}
              currTask={curTask.content}
              checked={curTask.checked}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn btn btn-danger" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </section>
  );
}
