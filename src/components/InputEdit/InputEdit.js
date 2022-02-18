import React from "react";

import "./Input.scss";

const classNames = require("classnames");

export default function InputEdit({
  emptyError,
  text,
  handleChangeUpdate,
  handleKeyPressUpdate,
  handleUpdate,
}) {
  const test = emptyError ? "inputError" : "";
  console.log(text);
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
