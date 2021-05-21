import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default function Footer({ handleClear, todoList }) {
  const items = todoList.filter((todo) => todo.completed === false);
  const itemsLeft = items.length;
  return (
    <div className="footerStyle border-top-0">
      {itemsLeft} items left
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <input
        type="button"
        className="footerBtn"
        onClick={handleClear}
        value="Clear"
      />
    </div>
  );
}
