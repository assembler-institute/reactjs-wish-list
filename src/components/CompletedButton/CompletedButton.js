import React from "react";

import "./CompletedButton.scss";

function CompletedButton({ id, handleChecked, isComplete }) {
  function onsetHandlecompleted() {
    handleChecked(id);
  }
  return (
    <>
      <input
        className="checkbox-round"
        type="checkbox"
        id={id}
        onClick={onsetHandlecompleted}
        checked={isComplete}
      />
    </>
  );
}

export default CompletedButton;
