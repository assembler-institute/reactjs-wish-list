import React from "react";
import List from "../components/List";

function Completed({ tasks, handleRemoveTask, handleCheckboxChange }) {
  return (
    <List
      tasks={tasks.filter((task) => task.completed)}
      handleRemoveTask={handleRemoveTask}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}

export default Completed;
