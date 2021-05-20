import React from "react";
// import { NavLink } from "react-router-dom";
import Todo from "../Todo";

import "./TodoList.scss";

function TodoList() {
  return (
    <section>
      <ul>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
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
