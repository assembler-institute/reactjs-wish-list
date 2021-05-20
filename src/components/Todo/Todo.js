import React from "react";
import "./Todo.scss";

export default function Todo({ id, text, done }) {
  // function handleTodoClick() {
  //   toggleTodo(todo.id);
  // }
  return (
    <div
      id={id}
      done={done.toString()}
      className="todo-wrapper d-flex justify-center align-items-center px-4"
    >
      <span className="checkbox-wrapper">
        <input type="checkbox" name="checkbox" />
        <span className="custom-checkbox" />
      </span>
      {/* <span className="checkbox-wrapper">
        <input type="checkbox" />
        <span className="custom-input" />
      </span> */}
      <h4 className="todo-text">{text}</h4>
      <i className="close uil uil-times" />
    </div>
  );
}

// checked={todo.complete}
// onChange={handleTodoClick}
