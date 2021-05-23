import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Template from "./components/layout/Template";

// import style
import "./App.scss";

function loadLocalStorage() {
  const json = localStorage.getItem("appState");
  const data = JSON.parse(json);

  if (!data) {
    return {
      id: Math.random() * 1000,
      todo: "",
      todoList: [],
      editTodo: false,
      hasError: false,
    };
  }
  return data;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random() * 1000,
      todo: "",
      todoList: [],
      editTodo: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    const storedState = loadLocalStorage();

    this.setState({
      id: storedState.id,
      todo: storedState.todo,
      todoList: storedState.todoList,
      editTodo: storedState.editTodo,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, todoList } = this.state;
    const newTodo = {
      id: Math.random() * 1000,
      title: todo,
      completed: false,
    };
    const updatedList = [...todoList, newTodo];
    this.setState({
      todoList: updatedList,
      todo: "",
      id: Math.random() * 1000,
      editTodo: false,
    });
  };

  handleCompleteTodo = (id) => {
    const { todoList } = this.state;

    this.setState({
      todoList: todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  handleEdit = (id) => {
    const { todoList } = this.state;
    const updatedList = todoList.filter((todo) => todo.id !== id);
    const todoToEdit = todoList.find((todo) => todo.id === id);
    this.setState({
      todoList: updatedList,
      todo: todoToEdit.title,
      id: id,
      editTodo: true,
    });
  };

  handleRemove = (id) => {
    const { todoList } = this.state;
    const updatedList = todoList.filter((todo) => todo.id !== id);
    this.setState({
      todoList: updatedList,
    });
  };

  handleClear = () => {
    const { todoList } = this.state;
    const clearedList = todoList.filter((todo) => todo.completed === false);
    this.setState({
      todoList: clearedList,
    });
  };

  render() {
    const { id, todo, todoList, editTodo, hasError } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <Template
              id={id}
              todo={todo}
              todoList={todoList}
              editTodo={editTodo}
              hasError={hasError}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCompleteTodo={this.handleCompleteTodo}
              handleEdit={this.handleEdit}
              handleRemove={this.handleRemove}
              handleClear={this.handleClear}
            />
          )}
        />
        <Route
          path="/completed"
          exact
          render={() => (
            <Template
              id={id}
              todo={todo}
              todoList={todoList}
              editTodo={editTodo}
              hasError={hasError}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCompleteTodo={this.handleCompleteTodo}
              handleEdit={this.handleEdit}
              handleRemove={this.handleRemove}
              handleClear={this.handleClear}
            />
          )}
        />
        <Route
          path="/active"
          exact
          render={() => (
            <Template
              id={id}
              todo={todo}
              todoList={todoList}
              editTodo={editTodo}
              hasError={hasError}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCompleteTodo={this.handleCompleteTodo}
              handleEdit={this.handleEdit}
              handleRemove={this.handleRemove}
              handleClear={this.handleClear}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
