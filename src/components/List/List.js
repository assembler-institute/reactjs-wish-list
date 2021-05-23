import React from "react";
import Task from "../Task";
import "./List.scss";

function List({ tasks, handleRemoveTask, handleCompleteTask }) {
  return (
    <div className="list-container bg-white">
      <ul className="p-0">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleRemoveTask={handleRemoveTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </ul>
    </div>
  );
}

export default List;
