import React from "react";

import "./Header.scss";

const MOON_PATH = "./img/moon.png";
const SUN_PATH = "./img/sun.png";

function Header({ toggleDarkLightMode, isDark }) {
  let mode;
  if (isDark === true) mode = <img className="icon" src={SUN_PATH} alt="Sun" />;
  else mode = <img className="icon" src={MOON_PATH} alt="Moon" />;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center header-logo">
      <div className="logo-todo">T O D O</div>
      <button
        className="without-border without-background"
        type="button"
        onClick={toggleDarkLightMode}
      >
        {mode}
      </button>
    </div>
  );
}

export default Header;
