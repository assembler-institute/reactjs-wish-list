/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "../Checkbox";
import EditTodo from "../EditTodo";
import "./Todo.scss";

function Todo({
  todo,
  handleRemove,
  handleChangeCheck,
  handleEdit,
  handleEditSubmit,
}) {
  function onHandleRemove() {
    handleRemove(todo.id);
  }
  function onHandleEdit() {
    handleEdit(todo.id);
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
        {todo.edit ? (
          <EditTodo todo={todo} handleEditSubmit={handleEditSubmit} />
        ) : (
          <label className={completedTask} onClick={onHandleEdit}>
            {todo.name}
          </label>
        )}
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
