import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";
import NewTodo from "../NewTodo";

import "./todo.scss";

function Todo({ id, content, handleIsActive, isActive, editTodo }) {
  return (
    <li>
      <span className="hashtag"> </span>

      <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
      <NewTodo id={id} content={content} editTodo={editTodo} />
      <div className="delete">
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </li>
  );
}

export default Todo;
