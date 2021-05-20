import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";
import "./_App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.newTodo = this.newTodo.bind(this);
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
    const { todo } = this.state;
    return (
      <main className="background_container">
        <Header />
        <section className="parent_container">
          <h1>TODO</h1>
          <Form newTodo={this.newTodo} />
          <Todo toDo={todo} />
        </section>
      </main>
    );
  }
}
export default App;
