import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";
import TodoInput from "../TodoInput";
import Hashtag from "../Hashtag";

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

  return (
    <li className="list">
      <div className="container__list">
        <span className="hashtag hashtagRed"> </span>

        <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
        <TodoInput
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
    </li>
  );
}

export default Todo;
