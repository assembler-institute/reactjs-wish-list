import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";

function NavItem() {
  return (
    <nav>
      <ul className=" d-flex">
        <li className="px-2 mGreyFont">
          <NavLink exact activeClassName="active" className="navigation" to="/">
            All
          </NavLink>
        </li>
        <li className="px-2 mGreyFont">
          <NavLink
            exact
            activeClassName="active"
            className="navigation"
            to="/active"
          >
            Active
          </NavLink>
        </li>
        <li className="px-2 mGreyFont">
          <NavLink
            exact
            activeClassName="active"
            className="navigation"
            to="/completed"
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavItem;
