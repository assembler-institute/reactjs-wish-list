import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter, Route } from "react-router-dom";

import All from "./pages/All";
import "./App.scss";

// function buildNewTodo(todo) {
//   return {
//     id: todo.id,
//     name: todo.name,
//     complete: false
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTodos: [],
      // completeTodos: [],
      // activeTodos: [],
      todoName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // componentDidMount() {
  //   api.getTodos().then((data) => {
  //     this.setState({
  //       todos: data,
  //     });
  //   });
  //   return;
  // }
  handleAddTodo({ todoName, allTodos }) {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      complete: false,
    };
    this.setState({ allTodos: [...allTodos, newTodo], todoName: "" });
    // eslint-disable-next-line
    console.log(todoName);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleAddTodo(this.state);
  }

  handleChange(e) {
    this.setState({ todoName: e.target.value });
  }

  handleRemove(id) {
    const { allTodos } = this.state;
    const arr = allTodos.filter((todo) => todo.id !== id);
    this.setState({ allTodos: arr });
  }

  render() {
    const { allTodos, todoName } = this.state;
    return (
      <All
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        allTodos={allTodos}
        todoName={todoName}
      />
    );
  }
}

export default App;
