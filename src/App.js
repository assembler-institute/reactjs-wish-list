/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AddToDoTask from "./components/AddToDoTask";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import MainList from "./components/MainList";
import FilterToDo from "./components/FilterToDo/FilterToDo";
import { deleteItem, saveItem } from "./utils/localStorage";


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }

  }
  
  componentDidMount() {
    // Then re-render MainList (props: task) & Footer (props: lenght)
    this.refreshState()
  }

  handlerNewToDo = (task) => {
    // Save Todo en localStorage
    saveItem(task)
    // Refresh state with new localStorage
    this.refreshState()
  } 
  
  handlerDeleteTask = (id) => {
    // Delete item from locaStorage
    deleteItem(id)

    // Refresh state
    this.refreshState()
  }

  handlerClearCompleted = () => {
    Object.values(localStorage).forEach(elm => {
      const task = JSON.parse(elm)
      task.done ? deleteItem(task.id) : null
    })
    this.refreshState()
  }

  refreshState = () => {
    // Get items from localStorage
    const localStorageTasks = Object.values(localStorage).map(elm => JSON.parse(elm))
    // Refresh state with new localStorage
    localStorageTasks.length > 0 ? this.setState({tasks: [...localStorageTasks]}) : this.setState({tasks: []})
  }

  render() {
    const {tasks} = this.state

    return (
      <main className="container mt-5">
        <section className="row">
          <div className="col col-12">
            <Header>
              <AddToDoTask handlerNewToDo={this.handlerNewToDo}/>
            </Header>
            <BrowserRouter>
              <MainList tasks={tasks} handlerDeleteTask={this.handlerDeleteTask} />
              <Footer>
                <FilterToDo counter={tasks.length} handlerClearCompleted={this.handlerClearCompleted}/>
              </Footer>
            </BrowserRouter>
          </div>
        </section>
      </main>
    )
  }
}
