import React from "react";

import "./AddTodo.scss";

export default function AddTodo({ todo, handleChange, handleSubmit }) {
  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          todo={todo}
          placeholder="Add To Do"
          onChange={handleChange}
          value={todo}
        />
        <button className="btn addBtn" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
