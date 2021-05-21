import React, { Component } from "react";
import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import Checkbox from "./components/Checkbox";

import hero from "./img/hero.jpg";
import { HOME, ACTIVE, COMPLETED } from "./constatnts/routes";

import "./header.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Brahim Benalia Casas", complete: false },
        { id: 2, name: "Marc Solá Crack", complete: false },
        { id: 3, name: "Brahim Benalia Casas", complete: false },
        { id: 4, name: "Marc Solá Crack", complete: false },
      ],
      todoName: "",
      checked: false,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleAddTodo({ todos, todoName }) {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      complete: false,
    };

    this.setState({ todos: [...todos, newTodo], todoName: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleAddTodo(this.state);
  }

  handleChange(e) {
    this.setState({ todoName: e.target.value });
  }

  handleRemove(id) {
    const { todos } = this.state;
    const arr = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: arr });
  }

  handleChangeCheck(id) {
    const { todos } = this.state;
    const arr = todos.map((todo) => {
      const obj = todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      return obj;
    });

    this.setState({ todos: arr });
  }

  render() {
    const { todos, todoName } = this.state;
    return (
      <>
        <header>
          <div className="heroImg" alt="hero" src={hero}>
            <h1 className="TODO__Header">TODO</h1>
            <form className="TODO__Form" onSubmit={this.handleSubmit}>
              <Checkbox handleChange={() => {}} />
              <input
                type="text"
                placeholder="Create task"
                className="TODO__Form__New"
                id={todoName}
                name={todoName}
                value={todoName}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </header>

        <Route
          path={ACTIVE}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              todos={todos.filter((todo) => !todo.complete)}
            />
          )}
        />

        <Route
          path={COMPLETED}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              todos={todos.filter((todo) => todo.complete)}
            />
          )}
        />

        <Route
          path={HOME}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              todos={todos}
            />
          )}
        />
      </>
    );
  }
}

export default App;
