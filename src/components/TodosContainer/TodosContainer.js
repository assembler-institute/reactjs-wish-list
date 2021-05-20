import React from "react";

import "./TodosContainer.scss";

function TodosContainer() {
  return (
    <>
      <div className="input-group borders">
        <div className="">
          <input className="checkbox-round" type="checkbox" />
        </div>
        <input className="form-control bg-light" type="text" />
        <button type="button" className="btn cancel" />
      </div>
    </>
  );
}

export default TodosContainer;
