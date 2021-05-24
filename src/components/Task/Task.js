import React from "react";
import "./Task.scss";

const classNames = require("classnames");

function Task({ task, handleRemoveTask, handleCheckboxChange }) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.parentNode.value);
  }

  function onTaskComplete(event) {
    handleCheckboxChange(event.target.value, event.target.checked);
  }

  const taskClass = classNames({
    "list-group-item": true,
    "task-completed": task.completed,
  });

  return (
    <li className={taskClass}>
      <input
        type="checkbox"
        className="hidden-chkbx"
        onChange={onTaskComplete}
        value={task.id}
        checked={task.completed}
      />

      {task.name}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={onTaskRemove}
        value={task.id}
      >
        <span aria-hidden="true" className="hidden">
          &times;
        </span>
      </button>
    </li>
  );
}

export default Task;
