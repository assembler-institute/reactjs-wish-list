import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import All from "./pages/All";
import "./App.scss";

// function buildNewTodo(todo) {
//   return {
//     id: todo.id,
//     name: todo.name,
//     complete: false
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTodos: [
        {
          id: "1",
          name: "Todo 1",
          complete: false,
        },
        {
          id: "2",
          name: "Todo 2",
          complete: false,
        },
        {
          id: "3",
          name: "Todo 3",
          complete: false,
        },
        {
          id: "4",
          name: "Todo 4",
          complete: false,
        },
        {
          id: "5",
          name: "Todo 5",
          complete: false,
        },
        {
          id: "6",
          name: "Todo 6",
          complete: false,
        },
        {
          id: "7",
          name: "Todo 7",
          complete: false,
        },
        {
          id: "8",
          name: "Todo 8",
          complete: false,
        },
        {
          id: "9",
          name: "Todo 9",
          complete: false,
        },
        {
          id: "10",
          name: "Todo 10",
          complete: false,
        },
      ],
      // completeTodos: [],
      // activeTodos: [],
    };
  }

  render() {
    const { allTodos } = this.state;

    return <All allTodos={allTodos} />;
  }
}

export default App;
