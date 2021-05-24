import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";
import TodoInput from "../TodoInput";
import Hashtag from "../Hashtag";

import "../../_text.scss";
import "./todo.scss";

function Todo({
  id,
  content,
  handleIsActive,
  isActive,
  editTodo,
  deleteTodo,
  hashtagDisplayed,
  displayHashtag,
}) {
  function deleteTodoId() {
    deleteTodo(id);
  }

  if (isActive === true) {
    return (
      <li className="list">
        <div className="container__list">
          <span className="hashtag hastagRed"> </span>

          <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
          <TodoInput
            className="text__check text__normal--check"
            id={id}
            content={content}
            editTodo={editTodo}
            displayHashtag={displayHashtag}
            hashtagDisplayed={hashtagDisplayed}
          />

          <div className="delete">
            <FontAwesomeIcon icon={faTimes} onClick={deleteTodoId} />
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <Hashtag hashtagDisplayed={hashtagDisplayed} />
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
    return (
      <li className="list">
        <div className="container__list">
          <span className="hashtag hastagRed"> </span>

          <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />

          <TodoInput
            className="text__check text__normal"
            id={id}
            content={content}
            editTodo={editTodo}
            displayHashtag={displayHashtag}
            hashtagDisplayed={hashtagDisplayed}
          />

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
