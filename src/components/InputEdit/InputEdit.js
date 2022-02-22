import React, { useRef, useEffect } from "react";

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

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form action="" className="inputForm">
      <input
        ref={inputRef}
        className={classNames("inputStyle", test)}
        type="text"
        placeholder={!emptyError ? text : "Please enter at least one character"}
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
