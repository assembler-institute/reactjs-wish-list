import React, { Component } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const local = JSON.parse(localStorage.getItem(`list`));
    return (
      <>
        <NewTodo />
        {local && <TodoList />}
        {/* {!local && <NoTodo />}; */}
      </>
    );
  }
}

export default App;
