import React from "react";
import TasksList from "../components/TasksList";

function Active({
  tasks,
  handleDeleteTask,
  handleUpdateTask,
  handleToggleEditing,
  handleToggleCheck,
}) {
  return (
    <ul className="col col-12 mb-0">
      <TasksList
        tasks={tasks.filter((task) => !task.isCompleted)}
        noTasksMessage=" active"
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        handleToggleEditing={handleToggleEditing}
        handleToggleCheck={handleToggleCheck}
      />
    </ul>
  );
}

export default Active;
