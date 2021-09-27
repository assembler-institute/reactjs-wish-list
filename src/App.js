import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { readLocalStorage, writeLocalStorage } from "./api";

import Header from "./components/Header";
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import NoTodos from "./components/NoTodos";

import "./App.scss";
import { Route } from "react-router";
import Switch from "./components/Switch";

const LOCAL_STORAGE_KEY = "react-todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isLoading: false,
      isDarkMode: false,
    };

    this.moveTodo = this.moveTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setTextTodo = this.setTextTodo.bind(this);
    this.setDoneTodo = this.setDoneTodo.bind(this);
    this.isEditingTodo = this.isEditingTodo.bind(this);
    this.clearDoneTodos = this.clearDoneTodos.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const todos = readLocalStorage(LOCAL_STORAGE_KEY);

      if (todos) {
        this.setState((prevState) => ({
          ...prevState,
          todos,
          isLoading: true,
        }));
      }
    }, 1500);
  }

  componentDidUpdate() {
    const { todos } = this.state;

    writeLocalStorage(LOCAL_STORAGE_KEY, todos);
  }

  addTodo(data) {
    const { todos } = this.state;

    todos.push({
      ...data,
      id: uuid(),
      done: false,
      isEditing: false,
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: todos,
    }));
  }

  moveTodo(srcIndex, dstIndex) {
    const { todos } = this.state;

    const draggedTodo = todos[srcIndex];
    todos.splice(srcIndex, 1);
    todos.splice(dstIndex, 0, draggedTodo);

    this.setState((prevState) => ({
      ...prevState,
      todos,
    }));
  }

  deleteTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.filter((item) => item.id !== id);

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  setTextTodo(id, text) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item.id === id) item.text = text;

      return item;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  setDoneTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item.id === id) item.done = !item.done;

      return item;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  clearDoneTodos() {
    const { todos } = this.state;

    const newTodos = todos.filter((item) => {
      return !item.done;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  isEditingTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      item.isEditing = item.id === id;

      return item;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  getTodos(pathname) {
    const { todos } = this.state;

    if (pathname === "/active") return todos.filter((item) => !item.done);
    if (pathname === "/completed") return todos.filter((item) => item.done);

    return todos;
  }

  toggleDarkMode() {
    this.setState((prevState) => ({
      ...prevState,
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  render() {
    const theme = this.state.isDarkMode ? "dark" : "light";

    return (
      <div data-ui-theme={theme} className="app-background">
        <main className="app-content container-sm container-md mx-auto p-5 flex flex-column gap-8">
          <Header handleTheme={this.toggleDarkMode} isDarkMode={this.state.isDarkMode} />
          <TodoCreateForm handleAddTodo={this.addTodo} />
          <section className="app-todo">
            <Route
              path="/"
              render={(routeProps) => {
                const pathname = routeProps.location.pathname;
                const todos = this.getTodos(pathname);

                return todos.length > 0 ? (
                  <TodoList
                    pathname={pathname}
                    todos={todos}
                    handleDelete={this.deleteTodo}
                    handleSetDone={this.setDoneTodo}
                    handleSetText={this.setTextTodo}
                    handleIsEditing={this.isEditingTodo}
                    handleMove={this.moveTodo}
                  />
                ) : (
                  <NoTodos pathname={pathname} />
                );
              }}
            />
            <TodoFooter count={this.getTodos("/active").length} handleClear={this.clearDoneTodos} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
