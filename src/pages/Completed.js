import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Completed({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
}) {
  return (
    <>
      <List
        tasks={tasks.filter((task) => task.completed)}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        currentFilter={window.location.pathname}
      />
    </>
  );
}

export default Completed;
