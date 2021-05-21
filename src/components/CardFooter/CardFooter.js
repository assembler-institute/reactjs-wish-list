import React from "react";
import { NavLink } from "react-router-dom";

import "./CardFooter.scss";

export default function CardFooter({ activeTodos }) {
  return (
    <section className="whiteBg gridFooter text-center">
      <p>{activeTodos} items left</p>
      <NavLink
        exact
        activeClassName="navbar-link-active"
        className="navbar-link"
        to="/"
      >
        All
      </NavLink>
      <NavLink
        exact
        activeClassName="navbar-link-active"
        className="navbar-link"
        to="/active"
      >
        Active
      </NavLink>
      <NavLink
        exact
        activeClassName="navbar-link-active"
        className="navbar-link"
        to="/completed"
      >
        Completed
      </NavLink>
      <button type="button">Clear completed</button>
    </section>
  );
}
