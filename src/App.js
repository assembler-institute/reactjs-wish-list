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

  render() {
    // console.log(this.state);
    return (
      <>
        <main>
          <section className="container">
            <Header />
            <NewTodo saveNewTodo={this.saveNewTodo} />
            <TodoList />
          </section>
        </main>
      </>
    );
  }
}

export default App;
