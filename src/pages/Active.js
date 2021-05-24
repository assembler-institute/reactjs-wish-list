import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Active({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
}) {
  const tasksActive = tasks.filter((task) => !task.completed);
  return (
    <>
      <List
        tasks={tasksActive}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        currentFilter={window.location.pathname}
        itemsLeft={tasksActive.length}
      />
    </>
  );
}

export default Active;
