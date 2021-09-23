import React from "react";
import CheckButton from "../EditButtons/CheckButton";
import EditButton from "../EditButtons/EditButton";
import RemoveButton from "../EditButtons/RemoveButton";
import "./Task.scss";

export default function Task({
  text,
  item,
  toDoItem,
  setToDoItem,
  setTodoEdit,
}) {
  return (
    <li className="task">
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
        <EditButton setTodoEdit={setTodoEdit} />
        <RemoveButton
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          item={item}
        />
      </div>
    </li>
  );
}