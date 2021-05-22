import React from "react";

import "./AppHeader.scss";

function AppHeader() {
  return (
    <div className="container-fluid d-flex">
      <h1 className="title text-white font-weight-bold bg-transparent">
        T O D O
      </h1>
      <button className="align-self-center" type="button">
        toggle dark mode
      </button>
    </div>
  );
}

export default AppHeader;
