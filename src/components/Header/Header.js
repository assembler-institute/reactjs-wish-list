import React from "react";

import "./Header.scss";

function Header({ toggleDarkLightMode, isDark }) {
  let state;
  if (isDark === true)
    state = (
      <button
        className="without-border without-background"
        type="button"
        onClick={toggleDarkLightMode}
      >
        LIGHT
      </button>
    );
  else
    state = (
      <button
        className="without-border without-background"
        type="button"
        onClick={toggleDarkLightMode}
      >
        DARK
      </button>
    );
  return (
    <div className="d-flex flex-row justify-content-between">
      <div>T O D O</div>
      {state}
    </div>
  );
}

export default Header;
