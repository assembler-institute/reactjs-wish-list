import React from "react";
import Task from "../Task";

function List({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id}>
          {task.name}
        </Task>
      ))}
    </ul>
  );
}

export default List;
