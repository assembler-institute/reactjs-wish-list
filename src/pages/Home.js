import React from "react";
import List from "../components/List";

function Home({ tasks, handleRemoveTask, handleCheckboxChange }) {
  return (
    <List
      tasks={tasks}
      handleRemoveTask={handleRemoveTask}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}

export default Home;
