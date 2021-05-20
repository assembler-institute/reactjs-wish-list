import React from "react";

function List({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} id={task.id}>
          {task.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
