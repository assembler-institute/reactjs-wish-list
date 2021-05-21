import React from "react";
import TasksList from "../components/TasksList";

function Completed({ tasks, handleDeleteTask }) {
  return (
    <ul className="col col-12">
      <TasksList
        tasks={tasks.filter((task) => task.isCompleted)}
        handleDeleteTask={handleDeleteTask}
      />
    </ul>
  );
}

export default Completed;
