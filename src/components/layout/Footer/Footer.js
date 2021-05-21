import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

export default function Footer({ handleClear, todoList }) {
  const items = todoList.filter((todo) => todo.completed === false);
  const itemsLeft = items.length;
  return (
    <div className="footerStyle border-top-0">
      {itemsLeft} items left
      <NavLink to="/" activeClassName="filtered" className="links" exact>
        All
      </NavLink>
      <NavLink to="/active" activeClassName="filtered" className="links" exact>
        Active
      </NavLink>
      <NavLink
        to="/completed"
        activeClassName="filtered"
        className="links"
        exact
      >
        Completed
      </NavLink>
      <input
        type="button"
        className="footerBtn"
        onClick={handleClear}
        value="Clear"
      />
    </div>
  );
}
