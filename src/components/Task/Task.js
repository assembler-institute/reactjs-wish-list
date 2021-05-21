import React from "react";

function Task({ value, handleRemoveTask, handleCompleteTask, id }) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.value);
  }

  function onTaskComplete(event) {
    handleCompleteTask(event.target.value);
  }

  return (
    <li>
      <input type="checkbox" onChange={onTaskComplete} value={id} />

      {value}
      <button type="button" onClick={onTaskRemove} value={id}>
        x
      </button>
    </li>
  );
}

export default Task;
