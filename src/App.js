import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.scss";

import Home from "./pages/Home";
import Completed from "./pages/Completed";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";

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

    this.saveNewTodo = this.saveNewTodo.bind(this);
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

  saveNewTodo(newTodo) {
    this.setState((prevState) => ({
      todos: [newTodo, ...prevState.todos],
    }));
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state);
    const { todos } = this.state;
    return (
      <>
        <Router>
          <main>
            <section className="container">
              <Header />
              <NewTodo saveNewTodo={this.saveNewTodo} />
              <Switch>
                <Route path="/active">
                  {todos.map((todo) => {
                    if (todo.isActive === false) {
                      return todo;
                    }
                    return null;
                  })}
                  <Home />
                </Route>
                <Route path="/completed">
                  <Completed />
                </Route>
                <Route path="/">
                  <Home todos={todos} />
                </Route>
              </Switch>
            </section>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
