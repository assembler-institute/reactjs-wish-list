import React, { Component } from "react";

import Home from "./pages/Home";

/* function findObjectByIdInArray(id, array) {
  const productData = array.find((element) => {
    return element.id === id;
  });
  return productData;
} */

function findIndexByIdInArray(id, array) {
  const productData = array.findIndex((element) => {
    return element.id === id;
  });
  return productData;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          key: 1,
          id: 1,
          title: "prueba 1",
          isComplete: true,
        },
        {
          key: 2,
          id: 2,
          title: "prueba 2",
          isComplete: false,
        },
        {
          key: 3,
          id: 3,
          title: "prueba 3",
          isComplete: true,
        },
        {
          key: 4,
          id: 4,
          title: "prueba 4",
          isComplete: false,
        },
      ],
    };
    this.handleCompleted = this.handleCompleted.bind(this);
    this.saveNewTodo = this.saveNewTodo.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.activeTodosCount = this.activeTodosCount.bind(this);
  }

  handleCompleted(id) {
    const { todos } = this.state;
    const selectedTodoId = findIndexByIdInArray(id, todos);
    todos[selectedTodoId].isComplete = !todos[selectedTodoId].isComplete;
    this.setState({ todos });
  }

  handleTodoChange(id, newText) {
    const { todos } = this.state;
    const changeTodoId = findIndexByIdInArray(id, todos);
    todos[changeTodoId].title = newText;
    this.setState({ todos });
  }

  handleTodoDelete(id) {
    let { todos } = this.state;
    todos = todos.filter((element) => {
      return element.id !== id;
    });
    this.setState({ todos });
  }

  activeTodosCount() {
    let { todos } = this.state;
    todos = todos.filter((element) => {
      return element.isComplete === false;
    });
    return todos.length;
  }

  saveNewTodo(newTodo) {
    const { todos } = this.state;
    todos.push(newTodo);
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <Home
        todos={todos}
        handleCompleted={this.handleCompleted}
        saveNewTodo={this.saveNewTodo}
        handleTodoChange={this.handleTodoChange}
        handleTodoDelete={this.handleTodoDelete}
        activeTodos={this.activeTodosCount()}
      />
    );
  }
}

export default App;
