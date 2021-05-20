import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ handleClear }) {
  return (
    <div>
      3 items left
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <button type="button" onClick={handleClear}>
        Clear completed
      </button>
    </div>
  );
}
