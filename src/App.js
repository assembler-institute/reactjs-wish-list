import React, { Component } from "react";

import "./styles.scss";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import * as api from "./api";

const LOCAL_STORAGE_KEY = "react-todo-app";

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
      todos: [],
    };
    this.handleIsActive = this.handleIsActive.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      api.getTodos().then((data) => {
        this.setState({
          todos: data,
        });
      });
      return;
    }

    this.setState({
      todos: prevItems.todos,
    });
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ todos }));
  }

  handleIsActive(todosId) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todosId) {
        // eslint-disable-next-line
        console.log(todo.isActive);
        return {
          ...todo,
          isActive: !todo.isActive,
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    const { todos } = this.state;
    // eslint-disable-next-line
    console.log(this.state);
    return (
      <>
        <main>
          <section className="container">
            <Header />
            <NewTodo saveNewTodo={this.saveNewTodo} />
            <TodoList
              todos={todos}
              isActive={todos.isActive}
              handleIsActive={this.handleIsActive}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
