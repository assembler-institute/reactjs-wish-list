import React from "react";

import "./CreateToDo.scss";

export default function CreateToDo() {
  return (
    <article className="create-todo-input">
      <span className="material-icons-outlined md-30">circle</span>
      <input type="text" placeholder="Create new item" />
    </article>
  );
}
