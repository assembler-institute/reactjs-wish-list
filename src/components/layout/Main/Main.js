import React from "react";
import AddTodo from "../../AddTodo/AddTodo";
import TodoList from "../../TodoList/TodoList";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <AddTodo />
      <TodoList />
    </div>
  );
}
