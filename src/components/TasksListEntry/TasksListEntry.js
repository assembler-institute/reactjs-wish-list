import React from "react";

import "./TasksListEntry.scss";
import Checkbox from "../Checkbox";
import TaskUpdater from "../TaskUpdater";

function TasksListEntry({
  id,
  title,
  isCompleted,
  editing,
  handleDeleteTask,
  handleUpdateTask,
  handleToggleEditing,
  handleToggleCheck,
  ...props
}) {
  function onHandleDeleteTask(event) {
    handleDeleteTask(event, id);
  }
  function onHandleUpdateTask(event) {
    handleUpdateTask(event, id);
  }
  function onHandleToggleEditing() {
    handleToggleEditing(id);
  }

  return (
    <li className="entry">
      <Checkbox
        defaultChecked={isCompleted}
        taskId={id}
        handleToggleCheck={handleToggleCheck}
        {...props}
      />
      <div>
        {editing ? (
          <TaskUpdater
            id={id}
            title={title}
            handleUpdateTask={onHandleUpdateTask}
          />
        ) : (
          <button
            className="camouflaged-button"
            type="button"
            onClick={onHandleToggleEditing}
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >
            {title}
          </button>
        )}
      </div>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={onHandleDeleteTask}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
}

export default TasksListEntry;
