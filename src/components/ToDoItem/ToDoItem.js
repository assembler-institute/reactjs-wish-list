import React, { useState } from "react";

import "./ToDoItem.scss";

import InputEdit from "../InputEdit";

export default function ToDoItem({
  isEditing,
  text,
  done,
  handleDone,
  handleDelete,
  id,
  data,
  // handleUpdate,
  // handleChangeUpdate,
  // handleKeyPressUpdate,
  isEmpty,
  toggleEditing,
  // getText,
}) {
  const [updateData, setUpdateData] = useState(data);
  const [updateValue, setUpdateValue] = useState("");
  function testValue(event) {
    setUpdateValue(event.target.value);
  }
  //   function testEnter(event) {
  //     if (event.keyCode === 13) {
  //       console.log("updated!!!");
  //     }
  //   }
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
          // handleKeyPressUpdate={testEnter}
          emptyError={isEmpty}
        />
      )}
      {!isEditing && (
        <p
          style={
            done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {text}
        </p>
      )}
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
