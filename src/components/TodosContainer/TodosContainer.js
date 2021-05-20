import React from "react";
import DeleteButton from "../DeleteButton";
import CompletedButton from "../CompletedButton";
import "./TodosContainer.scss";

function TodosContainer() {
  return (
    <div className="input-group borders">
      <CompletedButton />
      <input className="form-control bg-light" type="text" />
      <DeleteButton />
    </div>
  );
}

export default TodosContainer;
