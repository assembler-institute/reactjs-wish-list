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
  ...props
}) {
  function onHandleDeleteTask(event) {
    handleDeleteTask(event, id);
  }
  function onHandleToggleEditing() {
    handleToggleEditing(id);
  }

  return (
    <li>
      <Checkbox defaultChecked={isCompleted} taskId={id} {...props} />
      <div>
        {editing ? (
          <TaskUpdater
            id={id}
            title={title}
            handleUpdateTask={handleUpdateTask}
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
      <button type="button" onClick={onHandleDeleteTask}>
        X
      </button>
    </li>
  );
}

export default TasksListEntry;
