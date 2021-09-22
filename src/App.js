/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import AddToDoTask from "./components/AddToDoTask/AddToDoTask";

import { generateNewKey, getItem, saveItem } from "./utils/localStorage";
import TodoList from "./components/TodoList";


function App() {

  const [tasks, updateTasks] = useState([])

  // Get localStorage Items
  useEffect(() => {
    const localStorageTasks = Object.keys(localStorage).map(key => JSON.parse(getItem(parseInt(key, 10))))
    updateTasks((prevTasks) => [...prevTasks, ...localStorageTasks])
  }, [])
  
  // Add to do task to list
  const handlerToDoTask = (task) => {
    // Save in localStorage
    const key = generateNewKey()
    const taskObj = {
      id: key,
      inputValue: task.title,
      done: false,
      isEditing: false
    }
    saveItem(taskObj)

    // Update tasks state
    updateTasks((prevTasks) => [...prevTasks, taskObj])
  }


  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <AddToDoTask handlerToDoTask={handlerToDoTask}/>
          <TodoList tasks={tasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
