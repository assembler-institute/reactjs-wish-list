import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer({ handleClearCompleted, currentFilter, itemsLeft }) {
  return (
    <footer className="mb-4">
      <div className="container justify-content-between bg-white">
        <div>{itemsLeft || 0} items left</div>
        <Link
          exact="true"
          className={`nav-link p-0 ${currentFilter === "/" ? "active" : ""}`}
          to="/"
        >
          All
        </Link>
        <Link
          exact="true"
          className={`nav-link p-0 ${
            currentFilter === "/active" ? "active" : ""
          }`}
          to="/active"
        >
          Active
        </Link>
        <Link
          exact="true"
          className={`nav-link p-0 ${
            currentFilter === "/completed" ? "active" : ""
          }`}
          to="/completed"
        >
          Completed
        </Link>
        <button type="button" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
    </footer>
  );
}

export default Footer;
