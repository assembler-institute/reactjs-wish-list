/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import _ from "lodash";

import AddToDoTask from "./components/AddToDoTask/AddToDoTask";

import { saveItem } from "./utils/localStorage";
import TodoList from "./components/TodoList";


function App() {

  const [tasks, updateTasks] = useState([])

  const handlerToDoTask = (task) => {
    // Save in localStorage
    const key = _.uniqueId()
    const taskObj = {
      id: key,
      inputValue: task.title,
      done: false,
      isEditing: false
    }
    saveItem(taskObj)

    // Update tasks state
    updateTasks((prevTasks) => {
      return [...prevTasks, taskObj]  
    })
    
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
