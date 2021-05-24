import React from "react";
import classNames from "classnames/bind";
import "./List.scss";
import Task from "../Task";

function List({ tasks, handleRemoveTask, handleCheckboxChange }) {
  const divClass = classNames({
    "list-container": true,
    "bg-white": true,
    "empty-list": !tasks.length,
  });
  return (
    <div className={divClass}>
      <ul className="p-0 list-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
