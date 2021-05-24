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
            key={todo.id}
            text={todo.title}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
