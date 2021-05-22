import React from "react";
import DeleteButton from "../DeleteButton";
import CompletedButton from "../CompletedButton";
import "./TodosContainer.scss";

function TodosContainer({
  id,
  value,
  isComplete,
  handleRemove,
  handleSubmit,
  handleChange,
}) {
  return (
    <div className="d-flex justify-content-center align-items-center px-3 input-group borders">
      <CompletedButton id={id} isComplete={isComplete} />
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
