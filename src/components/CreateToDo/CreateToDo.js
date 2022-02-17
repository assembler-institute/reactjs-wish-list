import React from "react";

import "./CreateToDo.scss";

export default function CreateToDo({
  value,
  handleChange,
  handleSubmit,
  handleKeyPress,
  emptyError,
}) {
  return (
    <form action="" className="create-todo-input">
      <span className="material-icons-outlined md-30">circle</span>
      <input
        className={emptyError ? "inputError" : ""}
        type="text"
        placeholder={
          !emptyError
            ? "Create new item"
            : "Please enter at least one character"
        }
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        data-testid="create-todo-input"
      />
      <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleSubmit}
        name=""
        value=""
      />
    </form>
  );
}
