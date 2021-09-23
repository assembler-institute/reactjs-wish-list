/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddToDoTask from "./components/AddToDoTask/AddToDoTask";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { generateNewKey, saveItem } from "./utils/localStorage";
import TodoList from "./components/TodoList";
import FilterToDo from "./components/FilterToDo/FilterToDo";

function App() {

  const [tasks, updateTasks] = useState([])

  // Get localStorage Items
  useEffect(() => {
    const localStorageTasks = Object.values(localStorage).map(elm => JSON.parse(elm))
    localStorageTasks.length > 0 ? updateTasks((prevTasks) => [...prevTasks, ...localStorageTasks]) : null
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

  const handlerFilter = () => {

  } 

  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <BrowserRouter>
            <Header>
              <AddToDoTask handlerToDoTask={handlerToDoTask}/>
            </Header>
            <Main>
              <Switch>
                <Route path="/" render={(routeProps) => <TodoList {...routeProps} tasks={tasks} /> }/>
                <Route path="/completed" render={(routeProps) => <TodoList {...routeProps} tasks={tasks} /> } />
                <Route path="/active" render={(routeProps) => <TodoList {...routeProps} tasks={tasks} /> } />
              </Switch>
            </Main>
            <Footer>
              <FilterToDo handlerFilter={handlerFilter} counter={tasks.length}/>
            </Footer>
          </BrowserRouter>
        </div>
      </section>
    </main>
  );
}

export default App;
