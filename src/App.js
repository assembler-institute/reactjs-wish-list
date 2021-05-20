import React, { Component } from "react";
// import TestDesign from "./pages/TestDesign";
import { v4 as uuidv4 } from "uuid";
import All from "./pages/All";
import "./App.scss";

// import * as api from "./api";

// const todos = {
//   id: "",
//   name: "",
//   complete: false,
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTodos: [],
      // completeTodos: [],
      // activeTodos: [],
      todoName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // componentDidMount() {
  //   api.getTodos().then((data) => {
  //     this.setState({
  //       todos: data,
  //     });
  //   });
  //   return;
  // }
  handleAddTodo({ todoName, allTodos }) {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      complete: false,
    };
    allTodos.push(newTodo);
    this.setState({ allTodos: allTodos });
  }

  handleSubmit(e) {
    const { allTodos } = this.state;
    e.preventDefault();
    this.handleAddTodo(this.state);
    // eslint-disable-next-line
    console.log(allTodos);
  }

  handleChange(e) {
    this.setState({ todoName: e.target.value });
  }

  render() {
    return (
      <All handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    );
  }
}

export default App;
