import React from "react";
import "./Task.scss";
import classNames from "classnames/bind";

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
    "d-flex": true,
    "flex-row": true,
    "justify-content-between": true,
  });

  return (
    <li className={taskClass}>
      <div>
        <input
          type="checkbox"
          className="hidden-chkbx"
          onChange={onTaskComplete}
          value={task.id}
          checked={task.completed}
        />
        {task.name}
      </div>

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
