import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter, Route } from "react-router-dom";

import All from "./pages/All";
import "./App.scss";

const LOCAL_STORAGE_KEY = "react-todo-state";

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
      isEmpty: true,
      allTodos: [
        {
          id: "1",
          name: "test",
          complete: false,
        },
      ],
      // completeTodos: [],
      // activeTodos: [],
      todoName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();
    if (prevItems) {
      this.setState({
        allTodos: prevItems,
      });
    }
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

  componentDidUpdate() {
    const { allTodos } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTodos));
  }

  handleAddTodo({ todoName, allTodos }) {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      complete: false,
    };
    this.setState({
      allTodos: [...allTodos, newTodo],
      todoName: "",
      isEmpty: false,
    });
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
    if (arr.length === 0) {
      this.setState({
        isEmpty: true,
      });
    }
  }

  render() {
    const { allTodos, todoName, isEmpty } = this.state;
    return (
      <All
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        allTodos={allTodos}
        todoName={todoName}
        isEmpty={isEmpty}
      />
    );
  }
}

export default App;
