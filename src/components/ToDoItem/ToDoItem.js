import React from "react";

import "./ToDoItem.scss";

export default function ToDoItem({ text, done, handleDone, handleDelete }) {
  return (
    <article className="todo-item">
      <button type="button" className="" onClick={handleDone}>
        <span className="material-icons-outlined md-30">
          {done ? "check_circle" : "circle"}
        </span>
      </button>
      <p>{text}</p>
      <button type="button" className="" onClick={handleDelete}>
        <span className="material-icons-outlined md-30">close</span>
      </button>
      {/* <input type="text" placeholder="Create new item" /> */}
    </article>
  );
}
