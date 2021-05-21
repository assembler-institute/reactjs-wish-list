/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "../Checkbox";
import "./Todo.scss";

function Todo({ todo, handleRemove, handleChangeCheck }) {
  function onHandleRemove() {
    handleRemove(todo.id);
  }

  const completedTask = classNames({
    completed: todo.complete,
  });
  return (
    <div className="main__todo col col-12">
      <div className="main__todo__check">
        <Checkbox
          handleChange={handleChangeCheck}
          checked={todo.complete}
          id={todo.id}
        />
        <label className={completedTask}>{todo.name}</label>
      </div>
      <AiOutlineClose
        onClick={onHandleRemove}
        className="main__todo__close"
        size={24}
      />
    </div>
  );
}

export default Todo;
