import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./_text.scss";
import "./styles.scss";
import "./components/Footer/Footer.scss";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import * as api from "./api";

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
    this.handleIsEdit = this.handleIsEdit.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.displayHashtag = this.displayHashtag.bind(this);
    this.changeHashtag = this.changeHashtag.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        todos: [],
      });

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

  deleteTodo(todoId) {
    const { todos } = this.state;
    const todoDelete = todos.filter((todo) => todo.id !== todoId);
    this.setState(() => ({
      todos: todoDelete,
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
  }

  clearCompleted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.isActive === false);
    this.setState(() => ({
      todos: newTodos,
    }));
  }

  displayHashtag(todoId) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          hashtagDisplayed: !todo.hashtagDisplayed,
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  changeHashtag(todoId, color) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      let updateColor;
      if (todo.id === todoId) {
        if (color === todo.hashtag) {
          updateColor = "";
        } else {
          updateColor = color;
        }
        return {
          ...todo,
          hashtag: updateColor,
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
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
              <div className="shadow">
                <Switch>
                  <Route path="/active">
                    <TodoList
                      todos={active}
                      handleIsActive={this.handleIsActive}
                      deleteTodo={this.deleteTodo}
                      handleIsEdit={this.handleIsEdit}
                      displayHashtag={this.displayHashtag}
                      changeHashtag={this.changeHashtag}
                      editTodo={this.editTodo}
                    />
                  </Route>
                  <Route path="/completed">
                    <TodoList
                      todos={completed}
                      handleIsActive={this.handleIsActive}
                      deleteTodo={this.deleteTodo}
                      handleIsEdit={this.handleIsEdit}
                      displayHashtag={this.displayHashtag}
                      changeHashtag={this.changeHashtag}
                      editTodo={this.editTodo}
                    />
                  </Route>
                  <Route path="/">
                    <TodoList
                      todos={todos}
                      handleIsActive={this.handleIsActive}
                      deleteTodo={this.deleteTodo}
                      handleIsEdit={this.handleIsEdit}
                      displayHashtag={this.displayHashtag}
                      changeHashtag={this.changeHashtag}
                      editTodo={this.editTodo}
                    />
                  </Route>
                </Switch>
                <footer>
                  <div className="count text__small">
                    {active.length} items left
                  </div>
                  <div className="pages">
                    <Link to="/">
                      <button type="button" className="page text__small">
                        All
                      </button>
                    </Link>
                    <Link to="/active">
                      <button type="button" className="page text__small">
                        Actived
                      </button>
                    </Link>
                    <Link to="/completed">
                      <button type="button" className="page text__small">
                        Completed
                      </button>
                    </Link>
                  </div>
                  <button
                    className="delete-completed text__small"
                    type="button"
                    onClick={this.clearCompleted}
                  >
                    Clear Completed
                  </button>
                </footer>
              </div>
            </section>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
