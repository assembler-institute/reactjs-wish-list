import React from "react";
import "./Task.scss";

function Task({ task, handleRemoveTask, handleCompleteTask }) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.parentNode.value);
  }

  function onTaskComplete(event) {
    handleCompleteTask(event.target.value);
  }

  return (
    <li>
      <input type="checkbox" onChange={onTaskComplete} value={task.id} />

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
