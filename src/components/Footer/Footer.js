import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="todo_footer">
      <h6>5 items left</h6>
      <h6>All</h6>
      <h6>Active</h6>
      <Link to="/complete">
        <h6>Completed</h6>
      </Link>
      <h6>Clear Completed</h6>
    </footer>
  );
}

export default Footer;
