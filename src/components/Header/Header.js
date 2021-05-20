import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Haders.scss";

export default function Header() {
  return (
    <section className="header">
      <h1 className="title">TODO</h1>
      <div className="dark-mode">
        <FontAwesomeIcon icon={faMoon} className="moon" />
      </div>
    </section>
  );
}
