/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import _ from "lodash";

import AddToDoTask from "./components/AddToDoTask/AddToDoTask";

import { saveItem } from "./utils/localStorage";
import TodoList from "./components/TodoList";


function App() {

  const [tasks, updateTasks] = useState([])

  const [defaultValues, setDefaultValues] = useState({})

  const handlerToDoTask = (task) => {
    // Save in localStorage
    const key = task.id !== '' ? task.id : _.uniqueId()
    const taskObj = {
      id: key,
      text: task.title,
      done: false,
      isEditing: false
    }
    saveItem(taskObj)

    // Update tasks state
    updateTasks((prevTasks) => {
      return task.id === '' ? [...prevTasks, taskObj] : [prevTasks]   
    })
    
  }

  const editTaskText = (newText, newId) => {
    setDefaultValues({id: newId, text: newText})
  }


  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <AddToDoTask handlerToDoTask={handlerToDoTask} defaultValues={defaultValues} />
          <TodoList tasks={tasks} editTaskText={editTaskText} />
        </div>
      </section>
    </main>
  );
}

export default App;
