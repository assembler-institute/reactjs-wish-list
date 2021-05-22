import React from "react";
import Task from "../Task";
import "./List.scss";

function List({ tasks }) {
  return (
    <div className="list-container bg-white">
      <ul className="p-0">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id}>
            {task.name}
          </Task>
        ))}
      </ul>
    </div>
  );
}

export default List;
