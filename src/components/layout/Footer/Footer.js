import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default function Footer({ handleClear }) {
  return (
    <div className="footerStyle border-top-0">
      3 items left
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <input
        type="button"
        className="footerBtn"
        onClick={handleClear}
        value="Clear"
      />
    </div>
  );
}
