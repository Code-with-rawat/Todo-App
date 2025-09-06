import React, { useState } from "react";

export default function Todoform({ todoform }) {
  const [InputVal, setInputVal] = useState({});
  const handleChange = (value) => {
    setInputVal({ id: value, content: value, checked: false });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    todoform(InputVal);
    setInputVal({id:"", content: "", checked: false});
  };
  return (
    <section className="form" onSubmit={handleSubmit}>
      <form>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={InputVal.content}
            onChange={(event) => handleChange(event.target.value)}
          />
        </div>
        <div>
          <button className="todo-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}
