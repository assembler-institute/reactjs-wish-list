import React from "react";
import "./AppFooter.scss";
import NavItem from "../NavItem";

function AppFooter() {
  return (
    <footer className="d-flex justify-content-between p-3 ">
      <div className="mGreyFont"> 5 items left</div>
      <NavItem />
      <div className="mGreyFont">Clear Completed</div>
    </footer>
  );
}

export default AppFooter;
