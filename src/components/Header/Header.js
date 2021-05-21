import React from "react";

import "./Header.scss";

const MOON_PATH = "./img/moon.png";
const SUN_PATH = "./img/sun.png";

function Header({ toggleDarkLightMode, isDark }) {
  let mode;
  if (isDark === true)
    mode = <img className="icon-mode" src={SUN_PATH} alt="Sun" />;
  else mode = <img className="icon-mode" src={MOON_PATH} alt="Moon" />;
  return (
    <div className="d-flex flex-row justify-content-between">
      <div>T O D O</div>
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
