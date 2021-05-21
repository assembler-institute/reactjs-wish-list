import React from "react";
import DeleteButton from "../DeleteButton";
import CompletedButton from "../CompletedButton";
import "./TodosContainer.scss";

function TodosContainer({
  id,
  value,
  isComplete = false,
  handleSetCompleted,
  handleRemove,
  handleSubmit,
  handleChange,
}) {
  function onCompleted() {
    handleSetCompleted(id, isComplete);
  }

  return (
    <div className="d-flex justify-content-center align-items-center px-3 input-group borders">
      <CompletedButton handleSetCompleted={onCompleted} />
      <form className="mx-1" onSubmit={handleSubmit}>
        <input
          className="form-control bg-light"
          type="text"
          onChange={handleChange}
          defaultValue={value}
        />
      </form>
      <DeleteButton id={id} handleRemove={handleRemove} />
    </div>
  );
}

export default TodosContainer;
