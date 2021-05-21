import React from "react";
import TasksList from "../components/TasksList";

function Completed({
  tasks,
  handleDeleteTask,
  handleUpdateTask,
  handleToggleEditing,
}) {
  return (
    <ul className="col col-12">
      <TasksList
        tasks={tasks.filter((task) => task.isCompleted)}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        handleToggleEditing={handleToggleEditing}
      />
    </ul>
  );
}

export default Completed;
