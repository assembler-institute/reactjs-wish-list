import React from "react";

import "./Input.scss";

const classNames = require("classnames");

export default function Input({
  emptyError,
  text,
  handleChangeUpdate,
  handleKeyPressUpdate,
  handleUpdate,
}) {
  const test = emptyError ? "inputError" : "";
  return (
    <form action="" className="inputForm">
      <input
        className={classNames({ test }, "inputStyle")}
        type="text"
        placeholder={text}
        onChange={handleChangeUpdate}
        onKeyPress={handleKeyPressUpdate}
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
