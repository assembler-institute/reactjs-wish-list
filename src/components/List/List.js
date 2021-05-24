import React from "react";
import classNames from "classnames/bind";
import Task from "../Task";
import "./List.scss";

function List({ tasks, handleRemoveTask, handleCheckboxChange }) {
  const divClass = classNames({
    "list-container": true,
    "bg-white": true,
    "empty-list": !tasks.length,
  });
  return (
    <div className={divClass}>
      <ul className="p-0">
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
