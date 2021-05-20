import React from "react";

import Todo from "../todo";

import "./todolist.scss";

function TodoList({ todos, handleIsActive }) {
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isActive={todo.isActive}
            handleIsActive={handleIsActive}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
