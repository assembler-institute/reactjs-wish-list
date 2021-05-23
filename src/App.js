import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Active from "./components/pages/Active";
import Completed from "./components/pages/Complete";

import "./_App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.newTodo = this.newTodo.bind(this);
  }

  handleDelete() {
    const { todos } = this.props;
    const { todo } = this.props;
    // eslint-disable-next-line
    console.log("no eleminado", todos);
    todos.filter((item) => item.id !== todo.id);

    // eslint-disable-next-line
    console.log(this.state);

    // eslint-disable-next-line
    console.log("eleminado", todos);
  }

  newTodo(item) {
    const { todos } = this.state;

    todos.push(item);
    this.setState({
      todos: todos,
    });
    // eslint-disable-next-line
    console.log("some", todos);
  }

  render() {
    const { todos } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <Home
              {...routeProps}
              todos={todos}
              newTodo={this.newTodo}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/active"
          exact
          render={(routeProps) => <Active {...routeProps} todos={todos} />}
        />
        <Route
          path="/completed"
          exact
          render={(routeProps) => <Completed {...routeProps} todos={todos} />}
        />
      </BrowserRouter>
    );
  }
}
export default App;
