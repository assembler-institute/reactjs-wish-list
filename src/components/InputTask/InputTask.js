import React from "react";

import "./InputTask.scss";

function InputTask({ handleKeyDown }) {
  function onEnterKeyDown(event) {
    handleKeyDown(event);
  }
  return (
    <div className="container d-flex bg-white box-shadow py-4 input-container">
      <input className="mx-lg-2 align-self-center" type="checkbox" />
      <input
        className="d-flex align-self-center flex-fill border-0"
        type="text"
        placeholder="Insert new task to do"
        onKeyDown={onEnterKeyDown}
      />
    </div>
  );
}

export default InputTask;
