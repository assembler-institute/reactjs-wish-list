import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";

import "./todo.scss";

function Todo({ id, content, handleIsActive, isActive }) {
  return (
    <li>
      <span className="hashtag"> </span>

      <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
      <span>{content}</span>

      <div className="delete">
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </li>
  );
}

export default Todo;
