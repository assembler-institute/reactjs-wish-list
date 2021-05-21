import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

import defaultTodos from "./utils/demo-data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: defaultTodos,
      isLoading: false,
      hasError: false,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const { todos, isLoading, hasError } = this.state;
    // eslint-disable-next-line no-console
    console.log(todos, isLoading, hasError);

    this.setState({
      isLoading: false,
    });
  }

  componentDidUpdate() {
    const { todos } = this.state;
    // eslint-disable-next-line no-console
    console.log(todos);
  }

  handleAddTodo(text) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: uuidv4(), text: text, done: false }],
    }));
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <div className="general-background d-flex flex-column">
          <div className="top-background">
            <img
              className="img-background"
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
              alt="bck-img"
            />
          </div>
          <div className="bottom-background" />
        </div>
        <main className="container mt-5 main-container">
          <div className="main-header">
            <h1 className="main-header-title">T O D O</h1>
            <i className="uil uil-moon" />
          </div>
          <CreateTodo handleAddTodo={this.handleAddTodo} />
          <BrowserRouter>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <TodoList {...routeProps} todos={todos} />
              )}
            />
            <Route
              path="/active"
              exact
              render={(routeProps) => (
                <TodoList {...routeProps} todos={todos} />
              )}
            />
            <Route
              path="/completed"
              exact
              render={(routeProps) => (
                <TodoList {...routeProps} todos={todos} />
              )}
            />
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
