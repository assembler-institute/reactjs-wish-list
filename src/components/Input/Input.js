import React from "react";

import "./Input.scss";

const classNames = require("classnames");

export default function Input({
  emptyError,
  text,
  handleChange,
  handleKeyPress,
  handleUpdate,
}) {
  const test = emptyError ? "inputError" : "";
  return (
    <form action="" className="inputStyle">
      <input
        className={classNames({ test }, "inputStyle")}
        type="text"
        placeholder="Please enter at least one character"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        data-testid="create-todo-input"
      />
      <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleUpdate}
        name=""
        value=""
      />
    </form>
  );
}
