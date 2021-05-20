/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "../Checkbox";
import "./Todo.scss";

function Todo({ todo, handleRemove, handleChangeCheck }) {
  function onHandleRemove() {
    handleRemove(todo.id);
  }

  return (
    <div className="main__todo col col-12">
      <label>
        {/* <input className="mx-4" type="checkbox" name="name" /> */}
        <Checkbox
          handleChange={handleChangeCheck}
          checked={todo.complete}
          id={todo.id}
        />
        {todo.name}
      </label>
      <AiOutlineClose
        onClick={onHandleRemove}
        className="main__todo__close"
        size={24}
      />
    </div>
  );
}

export default Todo;
