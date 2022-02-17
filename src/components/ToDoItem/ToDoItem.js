import React from "react";

import "./ToDoItem.scss";

import Input from "../Input";

export default function ToDoItem({
  isEditing,
  text,
  done,
  handleDone,
  handleDelete,
  handleChange,
  handleUpdate,
  handleKeyPress,
  isEmpty,
  toggleEditing,
}) {
  return (
    <article className="todo-item">
      <button type="button" className="" onClick={handleDone}>
        <span className="material-icons-outlined md-30">
          {done ? "check_circle" : "circle"}
        </span>
      </button>
      {isEditing && (
        <Input
          value={text}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          handleKeyPress={handleKeyPress}
          emptyError={isEmpty}
        />
      )}
      {!isEditing && <p>{text}</p>}
      <button type="button" className="" onClick={toggleEditing}>
        <span className="material-icons-outlined md-30">edit</span>
      </button>
      <button type="button" className="" onClick={handleDelete}>
        <span className="material-icons-outlined md-30">close</span>
      </button>
      {/* <input type="text" placeholder="Create new item" /> */}
    </article>
  );
}
