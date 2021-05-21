import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter, Route } from "react-router-dom";

import All from "./pages/All";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: true,
      allTodos: [],
      // completeTodos: [],
      // activeTodos: [],
      todoName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  componentDidMount() {
    const { allTodos } = this.state;
    if (allTodos.length === 0) {
      this.setState({
        isEmpty: true,
      });
    }

    if (allTodos.length > 0) {
      this.setState({
        isEmpty: false,
      });
    }
  }

  handleAddTodo({ todoName, allTodos }) {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      complete: false,
    };
    allTodos.push(newTodo);
    this.setState({ allTodos: allTodos, isEmpty: false });
  }

  handleSubmit(e) {
    const { allTodos } = this.state;
    e.preventDefault();
    this.handleAddTodo(this.state);
    // eslint-disable-next-line
    console.log(allTodos);
  }

  handleChange(e) {
    this.setState({ todoName: e.target.value });
  }

  render() {
    const { allTodos, isEmpty } = this.state;
    return (
      <All
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        allTodos={allTodos}
        isEmpty={isEmpty}
      />
    );
  }
}

export default App;
