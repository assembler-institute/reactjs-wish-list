import React from "react";
// import { NavLink } from "react-router-dom";
import Todo from "../Todo";
import Footer from "../Footer";
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
      <Footer />
    </section>
  );
}

export default TodoList;
