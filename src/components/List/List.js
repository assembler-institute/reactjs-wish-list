import React from "react";
import Task from "../Task";

function List({ tasks, handleRemoveTask, handleCompleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          value={task.name}
          handleRemoveTask={handleRemoveTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </ul>
  );
}

export default List;
