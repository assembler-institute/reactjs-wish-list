import React from "react";

function Task({ task, handleRemoveTask, handleCompleteTask }) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.value);
  }

  function onTaskComplete(event) {
    handleCompleteTask(event.target.value);
  }

  return (
    <li>
      <input
        type="checkbox"
        onChange={onTaskComplete}
        value={task.id}
        disabled={task.completed}
        checked={task.completed}
      />

      {task.name}
      <button type="button" onClick={onTaskRemove} value={task.id}>
        x
      </button>
    </li>
  );
}

export default Task;
