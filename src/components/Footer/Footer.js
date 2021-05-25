import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { ClearBut } from "../Button/Button";

function Footer({ clear }) {
  return (
    <footer className="todo_footer">
      <h6>5 items left</h6>
      <Link to="/" className="nav_links">
        <h6>All</h6>
      </Link>
      <Link to="/active" className="nav_links">
        <h6>Active</h6>
      </Link>
      <Link to="/completed" className="nav_links">
        <h6>Completed</h6>
      </Link>
      <ClearBut onClick={clear} />
    </footer>
  );
}

export default Footer;
