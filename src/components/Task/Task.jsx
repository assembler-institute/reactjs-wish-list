import React, { useState } from "react";
import CheckButton from "../EditButtons/CheckButton";
import EditButton from "../EditButtons/EditButton";
import RemoveButton from "../EditButtons/RemoveButton";
import "./Task.scss";

export default function Task({
  text,
  item,
  toDoItem,
  setToDoItem,
  newName,
  setNewName,
}) {
  const [isEditing, setEditing] = useState(false);
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNameChangeSubmit = (e) => {
    e.preventDefault();
    const editedList = toDoItem.map((task) => {
      if (task.id === item.id) {
        task.text = newName; // eslint-disable-line no-param-reassign
        task.isEditing = true; // eslint-disable-line no-param-reassign
      }
      return task;
    });
    setToDoItem(editedList);
    setNewName("");
    setEditing(false);
  };

  const editView = () => (
    <>
      <li className="task" key={item.id}>
        <form className="form-edit" onSubmit={handleNameChangeSubmit}>
          <input
            id={item.id}
            className="todo-text"
            type="text"
            placeholder={item.text}
            onChange={handleNameChange}
            data-testid="todo-item-input"
          />
          <button
            type="button"
            className="btn todo-cancel"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </form>
      </li>
    </>
  );
  if (isEditing) {
    return editView();
  }
  return (
    <li className="task" data-testid="todo-item" key={item.id}>
      <label htmlFor="checkbox" className={`title ${item.done ? "done" : ""}`}>
        {/* <input type="checkbox" /> */}
        <CheckButton
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          item={item}
        />
        {text}
      </label>
      <div className="taskControllers">
        <EditButton
          setEditing={setEditing}
          item={item}
          setNewName={setNewName}
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
        />
        <RemoveButton
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          item={item}
        />
      </div>
    </li>
  );
}
