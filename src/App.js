// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
import ListFooter from "./components/ListFooter";

import * as api from "./api";

const LOCAL_STORAGE_KEY = "react-tasks-state";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return null;
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        // isLoading: true,
      });

      api.getTasks().then((data) => {
        this.setState({
          tasks: data,
          // isLoading: false,
        });
      });
      return;
    }

    this.setState({
      tasks: prevItems.tasks,
    });
  }

  componentDidUpdate() {
    const { tasks } = this.state;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tasks }));
  }

  handleDeleteTask(event, taskId) {
    const { tasks } = this.state;

    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    this.setState({ tasks: updatedTasks });
  }

  handleClearCompleted() {
    const { tasks } = this.state;

    const updatedTasks = tasks.filter((task) => !task.isCompleted);

    this.setState({ tasks: updatedTasks });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <Home
                {...routeProps}
                tasks={tasks}
                handleDeleteTask={this.handleDeleteTask}
              />
            )}
          />
          <Route
            path="/completed"
            exact
            render={(routeProps) => (
              <Completed
                {...routeProps}
                tasks={tasks}
                handleDeleteTask={this.handleDeleteTask}
              />
            )}
          />
          <Route
            path="/active"
            exact
            render={(routeProps) => (
              <Active
                {...routeProps}
                tasks={tasks}
                handleDeleteTask={this.handleDeleteTask}
              />
            )}
          />
          <ListFooter handleClearCompleted={this.handleClearCompleted} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
