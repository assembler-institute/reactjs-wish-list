import React from "react";
import "./Task.scss";

function Task({ task, handleRemoveTask, handleCheckboxChange }) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.parentNode.value);
  }

  function onTaskComplete(event) {
    handleCheckboxChange(event.target.value, event.target.checked);
  }

  return (
    <li>
      <input
        type="checkbox"
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
