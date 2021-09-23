import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { readLocalStorage, writeLocalStorage } from "./api";

import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

import "./App.scss";

const LOCAL_STORAGE_KEY = "react-todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isLoading: false,
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setTextTodo = this.setTextTodo.bind(this);
    this.setDoneTodo = this.setDoneTodo.bind(this);
    this.isEditingTodo = this.isEditingTodo.bind(this);
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
    }, 500);
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

  setDoneTodo(id, isDone) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item.id === id) item.done = isDone;

      return item;
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

  render() {
    const { todos } = this.state;

    return (
      <main className="container-sm container-md mx-auto p-5 flex flex-column gap-5">
        <h1 className="m-0">TODO</h1>
        <TodoCreateForm handleAddTodo={this.addTodo} />
        <section>
          <TodoList
            todos={todos}
            handleDelete={this.deleteTodo}
            handleSetDone={this.setDoneTodo}
            handleSetText={this.setTextTodo}
            handleIsEditing={this.isEditingTodo}
          />
          {/*<Footer count={todos.length} />*/}
        </section>
      </main>
    );
  }
}

export default App;
