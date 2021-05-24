import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./_text.scss";
import "./styles.scss";
import "./components/Footer/Footer.scss";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

// import * as api from "./api";

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
    this.saveNewTodo = this.saveNewTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        todos: [],
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

  saveNewTodo(newTodo) {
    this.setState((prevState) => ({
      todos: [newTodo, ...prevState.todos],
    }));
  }

  deleteTodo(todoId) {
    const { todos } = this.state;
    const todoDelete = todos.filter((todo) => todo.id !== todoId);
    // eslint-disable-next-line
    console.log(todoDelete);
    this.setState(() => ({
      todos: todoDelete,
    }));
  }

  clearCompleted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.isActive === false);
    // eslint-disable-next-line
    console.log(newTodos);
    this.setState(() => ({
      todos: newTodos,
    }));
  }

  render() {
    const { todos } = this.state;
    // eslint-disable-next-line
    console.log(this.state);
    const completed = todos.filter((todo) => todo.isActive === true);
    const active = todos.filter((todo) => todo.isActive === false);

    return (
      <>
        <Router>
          <main>
            <section className="container">
              <Header />
              <NewTodo saveNewTodo={this.saveNewTodo} />
              <Switch>
                <Route path="/active">
                  <TodoList
                    todos={active}
                    handleIsActive={this.handleIsActive}
                    deleteTodo={this.deleteTodo}
                  />
                </Route>
                <Route path="/completed">
                  <TodoList
                    todos={completed}
                    handleIsActive={this.handleIsActive}
                    deleteTodo={this.deleteTodo}
                  />
                </Route>
                <Route path="/">
                  <TodoList
                    todos={todos}
                    handleIsActive={this.handleIsActive}
                    deleteTodo={this.deleteTodo}
                  />
                </Route>
              </Switch>
              <footer>
                <div className="text__small">{active.length} items left</div>
                <div>
                  <Link to="/">
                    <button type="button" className="text__small">
                      All
                    </button>
                  </Link>
                  <Link to="/active">
                    <button type="button" className="text__small">
                      Actived
                    </button>
                  </Link>
                  <Link to="/completed">
                    <button type="button" className="text__small">
                      Completed
                    </button>
                  </Link>
                </div>
                <button
                  className="text__small"
                  type="button"
                  onClick={this.clearCompleted}
                >
                  Clear Completed
                </button>
              </footer>
            </section>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
