import React from "react";

import "./CompletedButton.scss";

function CompletedButton({ id, isComplete }) {
  function onsetHandlecompleted() {
    // eslint-disable-next-line
    console.log("cambio a verdadero");
  }
  return (
    <>
      <input
        className="checkbox-round"
        type="checkbox"
        id={id}
        isComplete={isComplete}
        onClick={onsetHandlecompleted}
      />
    </>
  );
}

export default CompletedButton;
