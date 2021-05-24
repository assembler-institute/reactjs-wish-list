import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";
import "../../_text.scss";
import "./todo.scss";

function Todo({ id, content, handleIsActive, isActive, deleteTodo }) {
  function deleteTodoId() {
    deleteTodo(id);
  }

  if (isActive === true) {
    console.log(isActive);
    // "true: " +
    return (
      <li className="list">
        <div className="container__list">
          <span className="hashtag hastagRed"> </span>

          <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />

          <span className="text__check text__normal--check">{content}</span>

          <div className="delete">
            <FontAwesomeIcon icon={faTimes} onClick={deleteTodoId} />
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <div className="container__hastag">
          <div className="text__normal">
            <div className="hastagRed "> </div>Very important
          </div>
          <div className="text__normal">
            <div className="hastagOrange "> </div>Important
          </div>
          <div className="text__normal">
            <div className="hastagGreen "> </div>Slope
          </div>
        </div>
      </li>
    );
  }
  if (isActive === false) {
    console.log(isActive);
    // "false: " +
    return (
      <li className="list">
        <div className="container__list">
          <span className="hashtag hastagRed"> </span>

          <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />

          <span className="text__normal">{content}</span>

          <div className="delete">
            <FontAwesomeIcon icon={faTimes} onClick={deleteTodoId} />
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <div className="container__hastag">
          <div className="text__normal">
            <div className="hastagRed "> </div>Very important
          </div>
          <div className="text__normal">
            <div className="hastagOrange "> </div>Important
          </div>
          <div className="text__normal">
            <div className="hastagGreen "> </div>Slope
          </div>
        </div>
      </li>
    );
  }
}

export default Todo;
