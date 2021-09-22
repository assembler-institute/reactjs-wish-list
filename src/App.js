import React, { Component } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import NoTodo from "./components/NoTodo/NoTodo";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
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
        el.isFinished === true
          ? (el.isFinished = false)
          : (el.isFinished = true);
      }
    });
    localStorage.setItem(`list`, JSON.stringify(tasks));
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
      <>
        <NewTodo saveNewTasks={this.saveNewTasks} />
        {tasks[0] ? (
          <TodoList
            tasks={tasks}
            removeTask={this.removeTask}
            completeTask={this.completeTask}
          />
        ) : (
          <NoTodo />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
