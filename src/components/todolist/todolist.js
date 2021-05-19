import React from "react";
import Todo from "../todo/todo";
import "./todolist.scss";

function Todolist() {
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
        <div>All Active Completed</div>
        <div>Clear Completed</div>
      </footer>
    </section>
  );
}

export default Todolist;
