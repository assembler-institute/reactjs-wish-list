import classNames from "classnames";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import Checkbox from "../Checkbox";
import EditTodo from "../EditTodo";

import "./Todo.scss";

function Todo({
  todo = {},
  handleRemove = () => {},
  handleChangeCheck = () => {},
  handleEdit = () => {},
  handleEditSubmit = () => {},
  handleResetEdit,
  currentTheme,
}) {
  function onHandleRemove() {
    handleRemove(todo.id);
  }
  function onHandleEdit() {
    handleEdit(todo.id);
  }

  const mainTodoClasses = classNames({
    main__todo: true,
    main__todo__darkMode: currentTheme,
  });

  const completedTask = classNames({
    completed: todo.complete,
    darkMode: currentTheme,
  });

  return (
    <div className={mainTodoClasses}>
      <div className="main__todo__check">
        <Checkbox
          handleChangeCheck={handleChangeCheck}
          checked={todo.complete}
          id={todo.id}
        />
        {todo.edit ? (
          <EditTodo
            todo={todo}
            handleResetEdit={handleResetEdit}
            handleEditSubmit={handleEditSubmit}
            currentTheme={currentTheme}
          />
        ) : (
          <button
            type="button"
            className={completedTask}
            onClick={onHandleEdit}
          >
            {todo.name}
          </button>
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
