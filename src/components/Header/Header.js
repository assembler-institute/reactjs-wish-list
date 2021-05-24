import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export default function Header({ toggleDarkMode, darkMode }) {
  function onDarkMode() {
    toggleDarkMode();
  }
  return (
    <section className="header">
      <h1 className={darkMode ? "title dark" : "title"}>TODO</h1>
      <button type="button" className="dark-mode" onClick={onDarkMode}>
        <FontAwesomeIcon
          icon={faMoon}
          className={darkMode ? "moon dark" : "moon"}
        />
      </button>
    </section>
  );
}
