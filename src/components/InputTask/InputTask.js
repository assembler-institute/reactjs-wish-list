import React from "react";

function InputTask({ handleKeyDown }) {
  function onEnterKeyDown(event) {
    handleKeyDown(event);
  }
  return (
    <input
      type="text"
      placeholder="Insert new task to do"
      onKeyDown={onEnterKeyDown}
    />
  );
}

export default InputTask;
