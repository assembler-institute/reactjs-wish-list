import React, { Component } from "react";

import "./CreateTodo.scss";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text: newText } = this.state;
    const { handleAddTodo } = this.props;
    handleAddTodo(newText);
    this.setState({
      text: "",
    });
  }

  handleTodoInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const { text } = this.state;

    return (
      <section className="row create-todo-section">
        <div className="col col-12">
          <form onSubmit={this.handleSubmit}>
            <input
              className="my-input"
              name="my-input"
              type="text"
              placeholder="Insert todo"
              value={text}
              onChange={this.handleTodoInputChange}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default CreateTodo;
