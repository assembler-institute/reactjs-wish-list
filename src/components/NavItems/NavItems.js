import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItems.scss";

function NavItem() {
  
  return (
    <div className="should__be__nav">
      <div className=" d-flex">
        <NavLink to="/all" className="px-2 mGreyFont">
            All
        </NavLink>
        <NavLink to="/active" className="px-2 mGreyFont">
            Active
        </NavLink>
        <NavLink to="/completed" className="px-2 mGreyFont">
            Completed
        </NavLink>
      </div>
    </div>
  );
}

export default NavItem;