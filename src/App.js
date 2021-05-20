import React, { Component } from "react";

import Home from "./pages/Home";

/* function findObjectByIdInArray(id, array) {
  const productData = array.find((element) => {
    return element.id === id;
  });
  return productData;
} */

function findIndexByIdInArray(id, array) {
  const productData = array.findIndex((element) => {
    return element.id === id;
  });
  return productData;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        /*    {
          key: 1,
          id: 1,
          text: "prueba 1",
          isComplete: true,
        },
        {
          key: 2,
          id: 2,
          text: "prueba 2",
          isComplete: false,
        },
        {
          key: 3,
          id: 3,
          text: "prueba 3",
          isComplete: true,
        },
        {
          key: 4,
          id: 4,
          text: "prueba 3",
          isComplete: false,
        }, */
      ],
    };
    this.handleCompleted = this.handleCompleted.bind(this);
  }
  /* Functions */

  handleCompleted(id) {
    const { todos } = this.state;
    const selectedTodoId = findIndexByIdInArray(id, todos);
    todos[selectedTodoId].isComplete = !todos[selectedTodoId].isComplete;
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return <Home todos={todos} handleCompleted={this.handleCompleted} />;
  }
}

export default App;
