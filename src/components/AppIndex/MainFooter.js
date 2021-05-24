import React from "react";
import { NavLink } from "react-router-dom";
import "./MainFooter.scss";

function MainFooter({ todosLeft, handleClearCompleted }) {
  function onClearCompleted() {
    handleClearCompleted();
  }
  return (
    <div className="main-footer col col-12 py-3">
      <div className="items-left footer-item">{todosLeft} todos left</div>
      <nav className="">
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/active"
            >
              Active
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/completed"
            >
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        aria-hidden="true"
        onClick={onClearCompleted}
        className="clear-all-div footer-item"
      >
        Clear Completed
      </div>
    </div>
  );
}

export default MainFooter;
