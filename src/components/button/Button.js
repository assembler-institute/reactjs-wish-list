import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Button.scss";

function Button({ id, handleIsActive, isActive }) {
  function onSetActive() {
    handleIsActive(id);
  }
  return (
    <button type="button" className="buttonCheck" onClick={onSetActive}>
      {isActive ? (
        <div className="checked">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      ) : (
        <div> </div>
      )}
    </button>
  );
}

export default Button;
