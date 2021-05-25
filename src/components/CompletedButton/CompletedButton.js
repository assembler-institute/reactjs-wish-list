import React from "react";

import "./CompletedButton.scss";

function CompletedButton({
  id,
  handleChecked,
  isComplete,
  handleAddToComplete,
  handleAddToActive,
}) {
  function onsetHandlecompleted() {
    handleChecked(id);
    handleAddToComplete(id);
    handleAddToActive(id);
  }
  return (
    <>
      <input
        className="checkbox-round"
        type="checkbox"
        id={id}
        // onClick={onsetHandlecompleted}
        checked={isComplete}
        onChange={onsetHandlecompleted}
      />
    </>
  );
}

export default CompletedButton;
