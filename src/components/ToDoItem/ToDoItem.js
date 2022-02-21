import React, { useState } from "react";

// initial={{ y: -50, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// transition={{ duration: 0.5, ease: "easeOut", type: "spring" }}

import "./ToDoItem.scss";

import InputEdit from "../InputEdit";

export default function ToDoItem({
  isEditing,
  text,
  done,
  label,
  handleDone,
  handleDelete,
  id,
  data,
  isEmpty,
  toggleEditing,
  theme,
}) {
  const [updateData, setUpdateData] = useState(data);
  const [updateValue, setUpdateValue] = useState("");
  function testValue(event) {
    setUpdateValue(event.target.value);
  }
  function testUpdate(event) {
    event.preventDefault();
    if (updateValue === "") return;
    const updateIndex = updateData.find((index) => index.id === id);
    const item = updateData.indexOf(updateIndex);
    const newState = Array.from(updateData);
    newState[item].text = updateValue;
    setUpdateData(newState);
    toggleEditing(id);
  }
  return (
    <article className="todo-item">
      <div className="item-label" style={{ backgroundColor: label }} />
      <button type="button" className="" onClick={handleDone}>
        <span
          className="material-icons-outlined md-30"
          style={done ? { color: "green" } : { color: "lightgray" }}
        >
          {done ? "check_circle" : "circle"}
        </span>
      </button>
      {isEditing && (
        <InputEdit
          text={text}
          handleUpdate={testUpdate}
          handleChangeUpdate={testValue}
          emptyError={isEmpty}
        />
      )}
      {!isEditing &&
        (theme ? (
          <p style={done ? { color: "darkgray" } : { color: "white" }}>
            {text}
          </p>
        ) : (
          <p style={done ? { color: "lightgray" } : { color: "black" }}>
            {text}
          </p>
        ))}
      <button type="button" className="" onClick={toggleEditing}>
        <span className="material-icons-outlined md-30">edit</span>
      </button>
      <button type="button" className="" onClick={handleDelete}>
        <span className="material-icons-outlined md-30">close</span>
      </button>
    </article>
  );
}
