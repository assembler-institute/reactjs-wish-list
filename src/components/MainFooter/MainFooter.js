import { render } from "@testing-library/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./MainFooter.scss";

const classNames = require("classnames");

function MainFooter({ todosLeft, darkMode }) {
  render();
  {
    // Conditional class
    const darkModeTodosLeft = classNames({
      "items-left footer-item": true,
      "footer-item-dark": darkMode,
    });

    const darkModeClear = classNames({
      "clear-all-div footer-item clear-button": true,
      "footer-item-dark": darkMode,
    });

    const darkModeNavLink = classNames({
      "nav-link": true,
      "nav-link-dark": darkMode,
    });

    const darkModeActive = classNames({
      active: true,
      "active-dark": darkMode,
    });

    return (
      <div className="main-footer col col-12 py-3 px-4">
        <div className={darkModeTodosLeft}>{todosLeft} todos left</div>
        <nav className="">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName={darkModeActive}
                className={darkModeNavLink}
                to="/"
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName={darkModeActive}
                className={darkModeNavLink}
                to="/active"
              >
                Active
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName={darkModeActive}
                className={darkModeNavLink}
                to="/completed"
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={darkModeClear}>Clear All</div>
      </div>
    );
  }
}

export default MainFooter;
