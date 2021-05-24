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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(arry, item) {
    const bolTodo = arry.map((todo) => {
      if (todo.id === item.id) {
        // eslint-disable-next-line no-param-reassign
        return { ...todo, selected: !todo.selected };
      }

      return todo;
    });

    this.setState({
      todos: bolTodo,
    });
  }

  handleDelete(arry, item) {
    // eslint-disable-next-line
    console.log("item", item);
    // eslint-disable-next-line
    console.log("con el item", arry);
    const notDelete = arry.filter((el) => el.id !== item.id);
    this.setState({
      todos: notDelete,
    });
    // eslint-disable-next-line
    console.log("sin el item", arry);
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
    const active = todos.filter((item) => item.selected === false);
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
              handleSelected={this.handleSelected}
            />
          )}
        />
        <Route
          path="/active"
          exact
          render={(routeProps) => <Active {...routeProps} active={active} />}
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
