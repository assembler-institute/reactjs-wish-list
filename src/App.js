/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AddToDoTask from "./components/AddToDoTask";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import MainList from "./components/MainList";
import FilterToDo from "./components/FilterToDo/FilterToDo";
import { deleteItem, saveItem } from "./utils/localStorage";
import Background from "./components/Background/Background";
import Title from "./components/Title/Title";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    // Then re-render MainList (props: task) & Footer (props: lenght)
    this.refreshState();
  }

  handlerNewToDo = (task) => {
    // Save Todo en localStorage
    saveItem(task);
    // Refresh state with new localStorage
    this.refreshState();
  };

  handlerDeleteTask = (id) => {
    // Delete item from locaStorage
    deleteItem(id);

    // Refresh state
    this.refreshState();
  };

  handlerClearCompleted = () => {
    Object.values(localStorage).forEach((elm) => {
      const task = JSON.parse(elm);
      task.done ? deleteItem(task.id) : null;
    });
    this.refreshState();
  };

  refreshState = () => {
    // Get items from localStorage
    const localStorageTasks = Object.values(localStorage).map((elm) =>
      JSON.parse(elm),
    );
    const sortedTasks = localStorageTasks.sort((a, b) => b.id - a.id);
    // Refresh state with new localStorage
    sortedTasks.length > 0
      ? this.setState({ tasks: [...sortedTasks] })
      : this.setState({ tasks: [] });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <Background />
        <main id="main-app" className="container mt-5">
          <Title />
          <section className="row justify-content-center">
            <div className="col col-sm-12 col-md-6 p-5 rounded bg-white shadow-lg">
              <Header>
                <AddToDoTask handlerNewToDo={this.handlerNewToDo} />
              </Header>
              <BrowserRouter>
                <MainList
                  tasks={tasks}
                  handlerDeleteTask={this.handlerDeleteTask}
                  refreshState={this.refreshState}
                />
                <Footer>
                  <FilterToDo
                    counter={tasks.length}
                    handlerClearCompleted={this.handlerClearCompleted}
                  />
                </Footer>
              </BrowserRouter>
            </div>
          </section>
        </main>
      </>
    );
  }
}
