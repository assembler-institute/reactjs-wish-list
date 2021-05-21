import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.scss";
import "./components/Footer/Footer.scss";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/todolist";

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
    this.handleIsEdit = this.handleIsEdit.bind(this);
    this.editTodo = this.editTodo.bind(this);
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
        return {
          ...todo,
          isActive: !todo.isActive,
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  handleIsEdit(todoId) {
    // eslint-disable-next-line
    console.log({ todoId });
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isEdit: !todo.isEdit,
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

  editTodo(todoId, content) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          content: content,
        };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
    // eslint-disable-next-line
    console.log(todoId, { todos });
  }

  clearCompleted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.isActive === false);
    this.setState(() => ({
      todos: newTodos,
    }));
  }

  render() {
    const { todos } = this.state;
    const completed = todos.filter((todo) => todo.isActive === true);
    const active = todos.filter((todo) => todo.isActive === false);

    return (
      <>
        <Router>
          <main>
            <section className="container">
              <Header />
              <div className="new-todo">
                <NewTodo saveNewTodo={this.saveNewTodo} />
              </div>
              <Switch>
                <Route path="/active">
                  <TodoList
                    todos={active}
                    handleIsActive={this.handleIsActive}
                    handleIsEdit={this.handleIsEdit}
                    editTodo={this.editTodo}
                  />
                </Route>
                <Route path="/completed">
                  <TodoList
                    todos={completed}
                    handleIsActive={this.handleIsActive}
                    handleIsEdit={this.handleIsEdit}
                    editTodo={this.editTodo}
                  />
                </Route>
                <Route path="/">
                  <TodoList
                    todos={todos}
                    handleIsActive={this.handleIsActive}
                    handleIsEdit={this.handleIsEdit}
                    editTodo={this.editTodo}
                  />
                </Route>
              </Switch>
              <footer>
                <div>{active.length} items left</div>
                <div>
                  <Link to="/">
                    <button type="button">All</button>
                  </Link>
                  <Link to="/active">
                    <button type="button">Actived</button>
                  </Link>
                  <Link to="/completed">
                    <button type="button">Completed</button>
                  </Link>
                </div>
                <button type="button" onClick={this.clearCompleted}>
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
