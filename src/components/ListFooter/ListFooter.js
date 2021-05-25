import React from "react";
import { NavLink } from "react-router-dom";

import "./ListFooter.scss";

function ListFooter({ handleClearCompleted, tasksLeft }) {
  return (
    <footer>
      <div className="justify-content-between list-footer">
        <div>
          <span>{tasksLeft} items left</span>
        </div>
        <div className="filter-panel">
          <NavLink exact activeClassName="is-active" to="/">
            All
          </NavLink>
          <NavLink exact activeClassName="is-active" to="/active">
            Active
          </NavLink>
          <NavLink exact activeClassName="is-active" to="/completed">
            Completed
          </NavLink>
        </div>
        <button
          type="button"
          className="camouflaged-button"
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      </div>
    </footer>
  );
}

export default ListFooter;
