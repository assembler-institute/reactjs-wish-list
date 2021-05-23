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
      hasTodos: false,
      lightMode: true,
      isLoading: false,
      hasError: false,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditedTodo = this.handleEditedTodo.bind(this);
    this.handleMode = this.handleMode.bind(this);
  }

  /* -------------------------------------------------------------------------- */
  /*                                CUSTOM METHODS                              */
  /* -------------------------------------------------------------------------- */

  // eslint-disable-next-line react/sort-comp
  handleDone(todoId) {
    // eslint-disable-next-line no-param-reassign
    const selInput = document.getElementById(`input-${todoId}`);
    selInput.disabled = !selInput.disabled;
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  handleDelete(todoId) {
    const { todos } = this.state;
    const itemToDelete = todos.find((todo) => todo.id === todoId);
    const indexToDelete = todos.indexOf(itemToDelete);

    todos.splice(indexToDelete, 1);
    this.setState({ todos: todos });

    if (todos.length === 0) {
      this.setState({ hasTodos: false });
      // eslint-disable-next-line no-console
      console.log("Empty todos");
    }
  }

  handleAddTodo(text) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: uuidv4(), text: text, done: false }],
      hasTodos: true,
    }));
  }

  handleEditedTodo(todoId, editedText) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          text: editedText,
        };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  handleMode() {
    const { lightMode } = this.state;
    this.setState({ lightMode: !lightMode });
    // eslint-disable-next-line
    console.log("Changed mode", lightMode);
  }

  /* -------------------------------------------------------------------------- */
  /*                                REACT METHODS                               */
  /* -------------------------------------------------------------------------- */
  componentDidMount() {
    const { todos, isLoading, hasError } = this.state;
    if (todos) {
      this.setState({ hasTodos: true });
    }

    this.setState({
      isLoading: true,
    });

    // eslint-disable-next-line no-console
    console.log(todos, isLoading, hasError);

    this.setState({
      isLoading: false,
    });
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.clear();
    // eslint-disable-next-line no-console
    console.log(this.state);
  }

  render() {
    const { todos, hasTodos } = this.state;

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
        <main className="container mt-5 main-container px-0">
          <div className="main-header">
            <h1 className="main-header-title">T O D O</h1>
            <button type="button" onClick={this.handleMode}>
              <i className="uil uil-moon" />
            </button>
          </div>
          <CreateTodo handleAddTodo={this.handleAddTodo} />
          <BrowserRouter>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos}
                  hasTodos={hasTodos}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  handleEditedTodo={this.handleEditedTodo}
                />
              )}
            />
            <Route
              path="/active"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos.filter((todo) => !todo.done)}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  hasTodos={hasTodos}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  handleEditedTodo={this.handleEditedTodo}
                />
              )}
            />
            <Route
              path="/completed"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos.filter((todo) => todo.done)}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  hasTodos={hasTodos}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  handleEditedTodo={this.handleEditedTodo}
                />
              )}
            />
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
