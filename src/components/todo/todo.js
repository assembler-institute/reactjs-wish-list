import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";

import "./todo.scss";

function Todo({ id, content, handleIsActive, isActive, deleteTodo }) {
  function deleteTodoId() {
    deleteTodo(id);
  }
  return (
    <li className="list">
      <div className="container__list">
        <span className="hashtag hastagRed"> </span>

        <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
        <span>{content}</span>

        <div className="delete">
          <FontAwesomeIcon icon={faTimes} onClick={deleteTodoId} />
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
      <div className="container__hastag">
        <div>
          <div className="hastagRed"> </div>Very important
        </div>
        <div>
          <div className="hastagOrange"> </div>Important
        </div>
        <div>
          <div className="hastagGreen"> </div>Slope
        </div>
      </div>
    </li>
  );
}

export default Todo;
