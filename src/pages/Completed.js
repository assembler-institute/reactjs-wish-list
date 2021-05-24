import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Completed({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
}) {
  const tasksCompleted = tasks.filter((task) => task.completed);
  return (
    <>
      <List
        tasks={tasksCompleted}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        currentFilter={window.location.pathname}
        itemsLeft={tasksCompleted.length}
      />
    </>
  );
}

export default Completed;
