import React from "react";

import "./ToDoItem.scss";

export default function ToDoItem() {
  return (
    <article className="todo-item">
      <button type="button" className="">
        <span className="material-icons-outlined md-30">circle</span>
      </button>
      <p>Read for 1 hour</p>
      <button type="button" className="">
        <span className="material-icons-outlined md-30">close</span>
      </button>
      {/* <input type="text" placeholder="Create new item" /> */}
    </article>
  );
}
