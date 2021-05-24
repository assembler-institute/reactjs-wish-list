import React from "react";
import List from "../components/List";

function Active({ tasks, handleRemoveTask, handleCheckboxChange }) {
  return (
    <List
      tasks={tasks.filter((task) => !task.completed)}
      handleRemoveTask={handleRemoveTask}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}

export default Active;
