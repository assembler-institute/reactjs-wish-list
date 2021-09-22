import React from "react";
import "./ToDo.scss";

function ToDo ({ handleSubmit, handleChange, todoName }) {
  return (
    <div className="input-group todo__create">
      <input className="todo__checkbox" type="checkbox" />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control bg-light todo__input" 
          type="text"
          placeholder="Add something"
          onChange={handleChange}
          value={todoName}
          />
      </form>
    </div>
  );
}

export default ToDo;