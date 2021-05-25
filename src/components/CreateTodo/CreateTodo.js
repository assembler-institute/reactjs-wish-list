import React from "react";

import "./CreateTodo.scss";

function CreateTodo({ handleSubmit, handleChange, todoName }) {
  return (
    <div className="input-group todo__create">
      <input className="todo__checkbox" type="checkbox" />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control bg-light todo__input"
          type="text"
          placeholder="Add Item..."
          onChange={handleChange}
          value={todoName}
        />
      </form>
    </div>
  );
}

export default CreateTodo;
