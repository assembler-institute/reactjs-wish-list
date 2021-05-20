import React from "react";
import "./Todo.scss";

export default function Todo({ id, text, done, handleDone, handleDelete }) {
  function onDone() {
    handleDone(id);
  }

  function onDelete() {
    handleDelete(id);
  }

  return (
    <div
      id={id}
      done={done.toString()}
      className="todo-wrapper d-flex justify-center align-items-center px-4"
    >
      <span className="checkbox-wrapper">
        <input onChange={onDone} type="checkbox" name="checkbox" />
        <span className="custom-checkbox" />
      </span>
      <h4 className="todo-text">{text}</h4>
      <button type="button" onClick={onDelete}>
        <i className="close uil uil-times" />
      </button>
    </div>
  );
}
