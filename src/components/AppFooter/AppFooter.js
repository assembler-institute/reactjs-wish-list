import React from "react";
import { NavLink } from "react-router-dom";

import "./AppFooter.scss";

import { HOME, ACTIVE, COMPLETED } from "../../constatnts/routes";

function AppFooter({ todos }) {
  return (
    <section className="main__footer">
      <span>{todos.filter((v) => !v.complete).length} items left</span>
      <div className="main__footer__lwrp">
        <NavLink
          className="main__footer__link"
          activeClassName="selected"
          exact
          to={HOME}
        >
          All
        </NavLink>
        <NavLink
          className="main__footer__link"
          activeClassName="selected"
          exact
          to={ACTIVE}
        >
          Active
        </NavLink>
        <NavLink
          className="main__footer__link"
          activeClassName="selected"
          exact
          to={COMPLETED}
        >
          Completed
        </NavLink>
      </div>
      <button className="main__footer__link" type="button">
        Clear completed
      </button>
    </section>
  );
}

export default AppFooter;
