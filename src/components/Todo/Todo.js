import React from "react";
import "./_Todo.scss";
import TodoItem from "../TodoItem";

function Todo({ todos, handleDelete }) {
  // eslint-disable-next-line
  console.log("que recive", todos);
  return (
    <div className="main-todo-container">
      <ul className="todo_print">
        {todos.map((todo) => (
          <TodoItem
            handleDelete={handleDelete}
            todo={todo}
            todos={todos}
            key={todo.id}
            text={todo.title}
          />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
