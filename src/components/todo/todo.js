import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";

import "./todo.scss";

function Todo({ id, content, handleIsActive, isActive }) {
  return (
    <li>
      <div>
        <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
        <span>{content}</span>
      </div>
      <div className="prueba">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  );
}

export default Todo;
