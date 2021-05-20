import React from "react";
// import { NavLink } from "react-router-dom";
import Todo from "../Todo";

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
      <footer>
        <div>5 items left</div>
        <div>
          <button type="button">All</button>
          <button type="button">Actived</button>
          <button type="button">Completed</button>
        </div>
        <div className="">Clear Completed</div>
      </footer>
    </section>
  );
}

export default TodoList;
