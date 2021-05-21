import React from "react";
import { Link } from "react-router-dom";

import "./ListFooter.scss";

function ListFooter({ handleClearCompleted }) {
  return (
    <footer className="mb-4">
      <div className="row">
        <Link exact="true" className="nav-link" to="/">
          All
        </Link>
        <Link exact="true" className="nav-link" to="/active">
          Active
        </Link>
        <Link exact="true" className="nav-link" to="/completed">
          Completed
        </Link>
        <button type="button" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
    </footer>
  );
}

export default ListFooter;
