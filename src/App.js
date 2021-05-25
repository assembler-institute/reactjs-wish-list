import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Active from "./components/pages/Active";
import Completed from "./components/pages/Complete";
// import Todo from "./components/Todo";

import "./_App.scss";

const LOCAL_STORAGE_KEY = "react-sc-state";

function loadLocalStorage() {
  const json = localStorage.getItem(LOCAL_STORAGE_KEY);

  const state = JSON.parse(json);

  if (!state) {
    return {
      todos: [],
    };
  }

  return state;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.newTodo = this.newTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    const prevState = loadLocalStorage();

    this.setState({
      todos: prevState.todos,
    });
  }

  componentDidUpdate() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state));
  }

  handleSelected(itemId) {
    const { todos } = this.state;
    const bolTodo = todos.map((todo) => {
      if (todo.id === itemId) {
        // eslint-disable-next-line no-param-reassign
        return { ...todo, selected: !todo.selected };
      }
      return todo;
    });
    this.setState({
      todos: bolTodo,
    });
  }

  handleDelete(itemId) {
    const { todos } = this.state;
    const notDelete = todos.filter((el) => el.id !== itemId);
    this.setState({
      todos: notDelete,
    });
  }

  submitNewTitle = (newTitle, id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = newTitle;
        }
        return todo;
      }),
    });
  };

  newTodo(item) {
    const { todos } = this.state;

    this.setState({
      todos: [...todos, item],
    });
  }

  clear() {
    const { todos } = this.state;
    const cleared = todos.filter((item) => item.selected !== true);
    this.setState({
      todos: cleared,
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home
              clear={this.clear}
              submitNewTitle={this.submitNewTitle}
              todos={todos}
              newTodo={this.newTodo}
              handleDelete={this.handleDelete}
              handleSelected={this.handleSelected}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/active"
          render={(routeProps) => (
            <Active
              submitNewTitle={this.submitNewTitle}
              handleDelete={this.handleDelete}
              handleSelected={this.handleSelected}
              newTodo={this.newTodo}
              todos={todos.filter((item) => item.selected === false)}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/completed"
          render={(routeProps) => (
            <Completed
              clear={this.clear}
              submitNewTitle={this.submitNewTitle}
              handleDelete={this.handleDelete}
              handleSelected={this.handleSelected}
              newTodo={this.newTodo}
              todos={todos.filter((item) => item.selected === true)}
              {...routeProps}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}
export default App;
