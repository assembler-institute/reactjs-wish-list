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
  }

  saveNewTasks(tasks) {
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <NewTodo saveNewTasks={this.saveNewTasks} />
        {tasks[0] ? <TodoList tasks={tasks} /> : <NoTodo />}
        <Footer />
      </>
    );
  }
}

export default App;
