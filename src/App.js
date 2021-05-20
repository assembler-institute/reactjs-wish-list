import React, { Component } from "react";
// import TestDesign from "./pages/TestDesign";
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
      // allTodos: [],
      // completeTodos: [],
      // activeTodos: [],
    };
  }

  // componentDidMount() {
  //   api.getTodos().then((data) => {
  //     this.setState({
  //       todos: data,
  //     });
  //   });
  //   return;
  // }

  render() {
    return <All />;
  }
}

export default App;
