import React from "react";

import "./CreateTodo.scss";

function CreateTodo() {
  return (
    <div className="input-group todo__create">
      <input className="todo__checkbox" type="checkbox" />
      <input
        className="form-control bg-light todo__input"
        type="text"
        placeholder="Add Item..."
      />
    </div>
  );
}

export default CreateTodo;
