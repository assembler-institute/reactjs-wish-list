import React from "react";
import DeleteButton from "../DeleteButton";
import CompletedButton from "../CompletedButton";
import "./TodosContainer.scss";

function TodosContainer({
  id,
  value = "",
  isComplete = false,
  handleSetCompleted,
}) {
  function onCompleted() {
    handleSetCompleted(id, isComplete);
  }

  return (
    <div className="input-group borders">
      <CompletedButton handleSetCompleted={onCompleted} />
      <input
        className="form-control bg-light"
        type="text"
        value={value}
        readOnly
      />
      <DeleteButton />
    </div>
  );
}

export default TodosContainer;
