import React from "react";
import classNames from "classnames";

import "./ThemeToggle.scss";

function ThemeToggle({ handleThemeClick, currentTheme }) {
  function onHandleThemeClick() {
    handleThemeClick();
  }
  const themeSwitcherClasses = classNames({
    themeSwitcherButton: true,
    themeSwitcherButton__active: currentTheme,
  });

  return (
    <div className="themeToggle">
      <span aria-label="" role="img">
        ☀️
      </span>
      <button
        type="button"
        className={themeSwitcherClasses}
        onClick={onHandleThemeClick}
      >
        <div className="switchPath">
          <div className="switchHandle" />
        </div>
      </button>
      <span aria-label="" role="img">
        🌙
      </span>
    </div>
  );
}

export default ThemeToggle;
