import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
// import components

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
      active: true,
      editTodo: false,
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
      active: true,
      editTodo: false,
    };
  }

  componentDidMount() {
    const storedState = loadLocalStorage();

    this.setState({
      id: storedState.id,
      todo: storedState.todo,
      todoList: storedState.todoList,
      active: storedState.active,
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
    const { id, todo, todoList, active, editTodo } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={() => (
            <Home
              id={id}
              todo={todo}
              todoList={todoList}
              active={active}
              editTodo={editTodo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCompleteTodo={this.handleCompleteTodo}
              handleEdit={this.handleEdit}
              handleRemove={this.handleRemove}
              handleClear={this.handleClear}
            />
          )}
        />
        <Route path="/completed" render={() => <Completed />} />
        <Route path="/active" render={() => <Active />} />
      </BrowserRouter>
    );
  }
}

export default App;
