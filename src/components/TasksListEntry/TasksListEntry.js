import React from "react";

import "./TasksListEntry.scss";
import { Formik } from "formik";
import Checkbox from "../Checkbox";

function TasksListEntry({
  id,
  title,
  isCompleted,
  editing,
  handleDeleteTask,
  ...props
}) {
  function onHandleDeleteTask(event) {
    handleDeleteTask(event, id);
  }
  // function onHandleToggleEditing() {}

  return (
    <li>
      <Checkbox defaultChecked={isCompleted} taskId={id} {...props} />
      {editing ? (
        <Formik
          initialValues={{
            title: { title },
          }}
          onSubmit={() => {}}
        />
      ) : (
        <span
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {title}
        </span>
      )}
      <button type="button" onClick={onHandleDeleteTask}>
        X
      </button>
    </li>
  );
}

export default TasksListEntry;
