import React from "react";

import Todo from "../Todo";
import "./TodoList.scss";
import Footer from "../layout/Footer";

export default function TodoList() {
  return (
    <div className="TodoList">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <h1>Hello!</h1>
      <Footer />
    </div>
  );
}
