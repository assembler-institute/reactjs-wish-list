import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Home({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
}) {
  return (
    <>
      <List
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        currentFilter={window.location.pathname}
        itemsLeft={tasks.length}
      />
    </>
  );
}

export default Home;
