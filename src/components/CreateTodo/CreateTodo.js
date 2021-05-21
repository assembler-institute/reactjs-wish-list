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
        <div className="col col-12 px-4 d-flex align-items-center">
          <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
            {/* <input type="checkbox" name="checkbox" /> */}
            <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center">
              {/* <i className="uil uil-check text-center" /> */}
            </div>
          </div>
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <input
              className="addtodo-input"
              name="addtodo-input"
              id="addtodo-input"
              type="text"
              placeholder="Add to do..."
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
