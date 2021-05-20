import React from "react";
import "./_Todo.scss";
import TodoItem from "../TodoItem";

function Todo({ todos }) {
  console.log(todos);
  return (
    <div className="main-todo-container">
      <ul className="todo_print">
        <TodoItem />
      </ul>
    </div>
  );
}
export default Todo;
