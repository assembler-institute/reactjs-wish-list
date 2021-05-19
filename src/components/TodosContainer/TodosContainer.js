import React from "react";

import "./TodosContainer.scss";

function TodosContainer() {
  return (
    <div className="input-group borders">
      <div className="container">
        <div className="round">
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id="checkbox" />
        </div>
      </div>
      <input className="form-control" type="text" />
      <button type="button" className="btn">
        X
      </button>
    </div>
  );
}

export default TodosContainer;
