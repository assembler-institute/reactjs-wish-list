import React from "react";

export default function Todo({ id, text, done }) {
  // function handleTodoClick() {
  //   toggleTodo(todo.id);
  // }
  return (
    <div id={id} className="todo-wrapper d-flex justify-center align-center">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          // checked={todo.complete}
          // onChange={handleTodoClick}
        />
        <span />
        <h4 className="todo-text">
          Text: {text}. Done: {done.toString()}
        </h4>
        <span className="close">&times;</span>
      </div>
    </div>
  );
}
