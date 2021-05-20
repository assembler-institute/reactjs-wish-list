import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
// import components

// import style
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random() * 1000,
      todo: "",
      todoList: [],
      editTodo: false,
    };
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
