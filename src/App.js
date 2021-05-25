import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";

import Main from "./components/Main";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
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
      isDark: false,
    };

    this.saveNewTask = this.saveNewTask.bind(this);
    this.toggleDarkLightMode = this.toggleDarkLightMode.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleToggleEditing = this.handleToggleEditing.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      api.getTasks().then((data) => {
        this.setState({
          tasks: data,
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

  handleToggleCheck(taskId) {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    this.setState({ tasks: updatedTasks });
  }

  handleToggleEditing(taskId) {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isEditing: true,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTasks });
  }

  handleUpdateTask(data, taskId) {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId && data.title !== task.title) {
        return {
          ...task,
          title: data.title,
          isEditing: false,
        };
      }
      return {
        ...task,
        isEditing: false,
      };
    });

    this.setState({ tasks: updatedTasks });
  }

  saveNewTask(newTask) {
    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks],
    }));
  }

  toggleDarkLightMode() {
    const { isDark } = this.state;
    if (isDark === true) this.setState({ isDark: false });
    else this.setState({ isDark: true });
  }

  render() {
    const { tasks, isDark } = this.state;

    return (
      <Main>
        <div className="list-header">
          <Header
            toggleDarkLightMode={this.toggleDarkLightMode}
            isDark={isDark}
          />
          <NewTask saveNewTask={this.saveNewTask} />
        </div>
        <div className="list-container">
          <BrowserRouter>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <Home
                  {...routeProps}
                  tasks={tasks}
                  handleDeleteTask={this.handleDeleteTask}
                  handleUpdateTask={this.handleUpdateTask}
                  handleToggleEditing={this.handleToggleEditing}
                  handleToggleCheck={this.handleToggleCheck}
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
                  handleUpdateTask={this.handleUpdateTask}
                  handleToggleEditing={this.handleToggleEditing}
                  handleToggleCheck={this.handleToggleCheck}
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
                  handleUpdateTask={this.handleUpdateTask}
                  handleToggleEditing={this.handleToggleEditing}
                  handleToggleCheck={this.handleToggleCheck}
                />
              )}
            />
            <ListFooter
              handleClearCompleted={this.handleClearCompleted}
              tasksLeft={tasks.filter((task) => !task.isCompleted).length}
            />
          </BrowserRouter>
        </div>
      </Main>
    );
  }
}

export default App;
