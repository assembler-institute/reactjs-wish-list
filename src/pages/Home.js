import React from "react";
import TasksList from "../components/TasksList";

function Home({ tasks, handleDeleteTask }) {
  return (
    <ul className="col col-12">
      <TasksList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </ul>
  );
}

export default Home;
