import React from "react";
import TasksList from "../components/TasksList";

function Home({
  tasks,
  handleDeleteTask,
  handleUpdateTask,
  handleToggleEditing,
}) {
  return (
    <ul className="col col-12">
      <TasksList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        handleToggleEditing={handleToggleEditing}
      />
    </ul>
  );
}

export default Home;
