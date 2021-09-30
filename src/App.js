import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import { readLocalStorage, writeLocalStorage } from "./api";
import { ThemeProvider } from "styled-components";
import { v4 as uuid } from "uuid";
import { AppMain, AppMainWrapper, AppContainer } from "./App.styled";
import { dark, light } from "./themes";
import Header from "./components/Header";
import FormAddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NoTodos from "./components/NoTodos";
import { Checkbox } from "./components/Checkbox";

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
          isLoading: false,
        }));
      }
    }, 1500);
  }

  componentDidUpdate() {
    const { todos } = this.state;

    writeLocalStorage(LOCAL_STORAGE_KEY, todos);
  }

  addTodo(data) {
    const newTodo = {
      ...data,
      id: uuid(),
      done: false,
      isEditing: false,
    };

    this.setState((prevState) => ({
      ...prevState,
      todos: [...prevState.todos, newTodo],
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
    const theme = this.state.isDarkMode ? dark : light;
    
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppMain>
            <AppMainWrapper>
              <Header handleTheme={this.toggleDarkMode} isDarkMode={this.state.isDarkMode} />
              <FormAddTodo handleAddTodo={this.addTodo} />
              <AppContainer>
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
                <Footer count={this.getTodos("/active").length} handleClear={this.clearDoneTodos} />
              </AppContainer>
            </AppMainWrapper>
          </AppMain>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
