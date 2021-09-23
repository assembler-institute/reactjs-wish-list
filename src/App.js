import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import img from "./img/header-light-mode-background-image.jpeg";
import DarkMode from "./components/DarkMode";
import "./main.scss";
import NewTodo from "./components/NewTodo";
import Footer from "./components/Footer/Footer";
import Completed from "./components/Completed/Completed";
import Home from "./components/Home/Home";
import Active from "./components/Active/Active";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem(`list`))
        ? JSON.parse(localStorage.getItem(`list`))
        : [],
    };
    this.saveNewTasks = this.saveNewTasks.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    //TODO this.editTask = this.editTask.bind(this);
  }

  saveNewTasks(tasks) {
    this.setState({
      tasks: tasks,
    });
  }

  //TODO editTask(id) {}

  completeTask(id) {
    const { tasks } = this.state;
    tasks.map((el) => {
      if (el.id === parseInt(id)) {
        el.isFinished ? (el.isFinished = false) : (el.isFinished = true);
      }
    });
    localStorage.setItem(`list`, JSON.stringify(tasks)),
      this.setState({
        tasks: tasks,
      });
  }

  removeTask(id) {
    const { tasks } = this.state;
    const retrieve = tasks.filter((el) => el.id !== parseInt(id));
    localStorage.setItem(`list`, JSON.stringify(retrieve));
    this.setState({
      tasks: retrieve,
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <Router>
        <div className="background">
          <div className="background--top">
            <img src={img} alt="bg-img" />
          </div>
          <div className="background--bottom" />
        </div>
        <main className="main">
          <header className="main--header">
            <h1>TODOS</h1> <DarkMode />
          </header>
          <section className="main__window">
            <div>
              <NewTodo saveNewTasks={this.saveNewTasks} />
            </div>
            <div className="todo__body">
              <div id="todo-list">
                <Switch>
                  <Route path="/completed">
                    <Completed
                      tasks={tasks}
                      completeTask={this.completeTask}
                      removeTask={this.removeTask}
                    />
                  </Route>
                  <Route path="/active">
                    <Active
                      tasks={tasks}
                      completeTask={this.completeTask}
                      removeTask={this.removeTask}
                    />
                  </Route>
                  <Route path="/">
                    <Home
                      tasks={tasks}
                      completeTask={this.completeTask}
                      removeTask={this.removeTask}
                    />
                  </Route>
                </Switch>
              </div>
              <Footer />
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

export default App;
