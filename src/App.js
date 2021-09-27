import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { themes } from "./themes";

import * as api from "./api";

import { AllPage, ActivePage, CompletePage } from "./pages";

import "./App.scss";

const LOCAL_STORAGE_KEY = "reactjs-todo-list";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) return null;

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
      theme: "light",
      status: "all",
      tasks: [],
      filteredTasks: [],
    };
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        isLoading: true,
      });

      api.getTasks().then((data) => {
        this.setState({
          status: "all",
          tasks: data,
          filteredTasks: data,
          isLoading: false,
        });
      });

      return;
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.matches ? this.changeTheme() : null;

    const status = window.location.pathname.substring(1);
    this.setState((prevState) => ({
      ...prevState,
      status: status,
      tasks: prevItems.tasks,
    }));

    this.pageFiltered(prevItems.tasks, status);
  }

  componentDidUpdate = () => {
    const { tasks } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tasks }));
  };

  pageFiltered = (tasks, status) => {
    let filteredTasks;
    if (status === "active")
      filteredTasks = tasks.filter((task) => task.done === false);
    else if (status === "complete")
      filteredTasks = tasks.filter((task) => task.done === true);
    else {
      filteredTasks = tasks;
      status = "all";
    }

    this.setState((prevState) => ({
      ...prevState,
      filteredTasks: filteredTasks,
      status: status,
    }));
  };

  changeTheme = () => {
    const { theme } = this.state;

    if (theme === "light") {
      this.setState((prevState) => ({
        ...prevState,
        theme: "dark",
      }));
    }
    if (theme === "dark") {
      this.setState((prevState) => ({
        ...prevState,
        theme: "light",
      }));
    }
  };

  onKeyDownSubmit = (e, handleSubmit) => {
    if (e.key === "Enter") {
      e.preventDefault();

      e.target.blur();

      handleSubmit();
    }
  };

  onKeyDownEdit = (e, taskId) => {
    if (e.key === "Enter") {
      e.preventDefault();

      this.toggleEditTask(e, taskId);
      this.saveEditTask(e, taskId);
    }
  };

  saveOrderTasks = (tasks) => {
    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  saveNewTask = (newTask) => {
    this.setState((prevState) => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
      filteredTasks: [newTask, ...prevState.filteredTasks],
    }));
    const status = window.location.pathname.substring(1);
    this.pageFiltered(this.state.tasks, status);
  };

  saveEditTask = (text, taskId) => {
    const { tasks } = this.state;

    tasks.map((task) => {
      if (task.id === taskId) {
        task.text = text;
        task.isEditing = false;
        console.log("guarda: " + text);
        task.updatedAt = new Date().toISOString();
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  toggleDoneTask = (e, taskId) => {
    const { tasks } = this.state;

    tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
        task.updatedAt = new Date().toISOString();
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));

    const status = window.location.pathname.substring(1);
    this.pageFiltered(tasks, status);
  };

  toggleEditTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    tasks.map((task) => {
      task.id === taskId ? (task.isEditing = !task.isEditing) : null;
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  removeTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    const newTasks = tasks.filter((task) => task.id !== taskId);
    this.setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
      filteredTasks: newTasks,
    }));
  };

  removeAllCompletedTasks = (e) => {
    e.preventDefault();

    const { tasks } = this.state;

    const newTasks = tasks.filter((task) => task.done !== true);

    this.setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
      filteredTasks: newTasks,
    }));
  };

  filterTasks = (status) => {
    const { tasks } = this.state;

    let filteredTasks;

    status === "all" ? (filteredTasks = tasks) : null;
    status === "active"
      ? (filteredTasks = tasks.filter((task) => task.done === false))
      : null;
    status === "complete"
      ? (filteredTasks = tasks.filter((task) => task.done === true))
      : null;

    this.setState((prevState) => ({
      ...prevState,
      filteredTasks: filteredTasks,
      status: status,
    }));
  };

  render() {
    const { tasks, filteredTasks, theme } = this.state;

    // const mq = window.matchMedia('(prefers-color-scheme: dark)');
    // mq.matches ? this.changeTheme : 'light';

    // console.log(`${mq.matches ? 'dark' : 'light'} mode`);

    // useMediaQuery({
    //   query: '(prefers-color-scheme: dark)'
    // }, undefined, (isDarkPreffered) => isDarkPreffered ? 'dark' : 'light')

    return (
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <AllPage
                  {...routeProps}
                  tasks={tasks}
                  theme={theme}
                  filteredTasks={filteredTasks}
                  changeTheme={this.changeTheme}
                  saveNewTask={this.saveNewTask}
                  saveOrderTasks={this.saveOrderTasks}
                  onKeyDownSubmit={this.onKeyDownSubmit}
                  toggleEditTask={this.toggleEditTask}
                  saveEditTask={this.saveEditTask}
                  onKeyDownEdit={this.onKeyDownEdit}
                  toggleDoneTask={this.toggleDoneTask}
                  removeTask={this.removeTask}
                  filterTasks={this.filterTasks}
                  removeAllCompletedTasks={this.removeAllCompletedTasks}
                />
              )}
            />
            <Route
              path="/active"
              exact
              render={(routeProps) => (
                /*           tasks.filter((task) => {task.done === true} */
                <ActivePage
                  {...routeProps}
                  tasks={tasks}
                  theme={theme}
                  filteredTasks={filteredTasks}
                  changeTheme={this.changeTheme}
                  saveNewTask={this.saveNewTask}
                  saveOrderTasks={this.saveOrderTasks}
                  onKeyDownSubmit={this.onKeyDownSubmit}
                  toggleEditTask={this.toggleEditTask}
                  saveEditTask={this.saveEditTask}
                  onKeyDownEdit={this.onKeyDownEdit}
                  toggleDoneTask={this.toggleDoneTask}
                  removeTask={this.removeTask}
                  filterTasks={this.filterTasks}
                  removeAllCompletedTasks={this.removeAllCompletedTasks}
                />
              )}
            />
            <Route
              path="/complete"
              exact
              render={(routeProps) => (
                <CompletePage
                  {...routeProps}
                  tasks={tasks}
                  theme={theme}
                  filteredTasks={filteredTasks}
                  changeTheme={this.changeTheme}
                  saveNewTask={this.saveNewTask}
                  saveOrderTasks={this.saveOrderTasks}
                  onKeyDownSubmit={this.onKeyDownSubmit}
                  toggleEditTask={this.toggleEditTask}
                  saveEditTask={this.saveEditTask}
                  onKeyDownEdit={this.onKeyDownEdit}
                  toggleDoneTask={this.toggleDoneTask}
                  removeTask={this.removeTask}
                  filterTasks={this.filterTasks}
                  removeAllCompletedTasks={this.removeAllCompletedTasks}
                />
              )}
            />
            <Route path="*">
              <p>error 404</p>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
