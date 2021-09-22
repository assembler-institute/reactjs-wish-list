import React from "react";
import NavItem from "../NavItems/NavItems";
import "./MainHeader.scss";

function MainHeader() {
    return (
      <header className ="d-flex flex-row justify-content-between mb-4">
      <h1 className="title">TODO</h1>
      </header>
    );
}

export default MainHeader;
