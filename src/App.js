import React, { Component } from "react";

import DarkMode from "./components/DarkMode";
import "./main.scss";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import NoTodo from "./components/NoTodo/NoTodo";
import Footer from "./components/Footer/Footer";
import bgLightImg from "./img/header-light-mode-background-image.jpeg";

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
  }

  saveNewTasks(tasks) {
    this.setState({
      tasks: tasks,
    });
  }

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
    const { lightmode } = this.props;
    return (
      <>
        <div className="background">
          <div className="background--top">
            <img
              id="bg-top"
              src={lightmode ? bgDarkImg : bgLightImg}
              alt="bg-img"
            />
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
                {tasks[0] ? (
                  <TodoList
                    tasks={tasks}
                    removeTask={this.removeTask}
                    completeTask={this.completeTask}
                  />
                ) : (
                  <NoTodo /> // Error is here, tasks is read a empty array!
                )}
              </div>
              <Footer />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
