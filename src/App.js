import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter, Route } from "react-router-dom";

import All from "./pages/All";
import "./App.scss";

const LOCAL_STORAGE_KEY = "all-todos";
const LOCAL_STORAGE_KEY_COMPLETED = "completed-todos";
const LOCAL_STORAGE_KEY_ACTIVE = "active-todos";

function loadLocalStorageData(page) {
  const prevItems = localStorage.getItem(page);

  if (!prevItems) {
    return false;
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
      allTodos: [],
      completeTodos: [],
      activeTodos: [],
      todoName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleAddToComplete = this.handleAddToComplete.bind(this);
    this.handleAddToActive = this.handleAddToActive.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData(LOCAL_STORAGE_KEY);
    if (!prevItems) {
      this.setState({
        isEmpty: true,
      });
    }

    if (prevItems.length > 0) {
      this.setState({
        allTodos: prevItems,
        isEmpty: false,
      });
    }
  }

  componentDidUpdate() {
    const { allTodos, completeTodos, activeTodos } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTodos));
    localStorage.setItem(
      LOCAL_STORAGE_KEY_COMPLETED,
      JSON.stringify(completeTodos),
    );
    localStorage.setItem(LOCAL_STORAGE_KEY_ACTIVE, JSON.stringify(activeTodos));
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

  handleEditTodo(value, id) {
    const { allTodos } = this.state;
    const todoIndexInArray = allTodos.findIndex((todo) => todo.id === id);
    allTodos[todoIndexInArray].name = value;
    this.setState({
      allTodos,
    });
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

  handleChecked(id) {
    const { allTodos } = this.state;

    const arr = allTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    this.setState({
      allTodos: arr,
    });
  }

  handleAddToComplete(id) {
    const { allTodos, completeTodos } = this.state;

    const todoFound = allTodos.find((item) => item.id === id);
    const todoInComplete = completeTodos.find((todo) => todo.id === id);

    if (todoInComplete) {
      const updateTodo = completeTodos.filter((todo) => todo.id !== id);
      this.setState({
        completeTodos: updateTodo,
      });
    }

    if (!todoInComplete) {
      this.setState({
        completeTodos: [...completeTodos, todoFound],
      });
    }
  }

  handleAddToActive(id) {
    const { allTodos, completeTodos, activeTodos } = this.state;

    const todoFound = allTodos.find((item) => item.id === id);
    const todoInComplete = completeTodos.find((item) => item.id === id);
    const todoInActive = activeTodos.find((todo) => todo.id === id);

    if (todoInComplete && !todoInActive) {
      this.setState({
        activeTodos: [...activeTodos, todoFound],
      });
    }

    if (todoInActive) {
      const updateTodo = activeTodos.filter((todo) => todo.id !== id);
      this.setState({
        activeTodos: updateTodo,
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
        handleChecked={this.handleChecked}
        handleEditTodo={this.handleEditTodo}
        handleAddToComplete={this.handleAddToComplete}
        handleAddToActive={this.handleAddToActive}
        allTodos={allTodos}
        todoName={todoName}
        isEmpty={isEmpty}
        todoLenght={allTodos.length}
      />
    );
  }
}

export default App;
