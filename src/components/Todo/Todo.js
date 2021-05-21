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
      done={done}
      className="todo-wrapper d-flex justify-content-center align-items-center px-4"
    >
      <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
        <input onChange={onDone} type="checkbox" name="checkbox" />
        <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center">
          <i className="uil uil-check text-center" />
        </div>
      </div>
      <h4 className="todo-text">{text}</h4>
      <button
        type="button"
        onClick={onDelete}
        className="d-flex justify-content-center align-items-center"
      >
        <i className="close uil uil-times" />
      </button>
    </div>
  );
}
