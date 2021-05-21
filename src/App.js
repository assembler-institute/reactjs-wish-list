import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { ButtonCompleted } from "./components/Button/Button";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";
import Completed from "./components/pages/complete/comletepage";
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
    const { todos } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <main className="background_container">
              <Header />
              <section className="parent_container">
                <h1>TODO</h1>
                <Form newTodo={this.newTodo} />
                <Todo todos={todos} />
                <Footer />
              </section>
            </main>
          )}
        />
        <Route exact component={Completed} render={() => <Footer />} />
      </BrowserRouter>
    );
  }
}
export default App;
