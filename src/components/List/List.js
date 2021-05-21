import React from "react";
import Task from "../Task";

function List({ tasks, handleRemoveTask, handleCompleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleRemoveTask={handleRemoveTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </ul>
  );
}

export default List;
