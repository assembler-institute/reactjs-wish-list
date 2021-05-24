import React, { Component } from "react";

import "./CreateTodo.scss";

const classNames = require("classnames");

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
    if (newText === "") {
      alert("Please enter at least one character");
    } else {
      handleAddTodo(newText);
      this.setState({
        text: "",
      });
    }
  }

  handleTodoInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const { text } = this.state;
    const { darkMode } = this.props;

    // Conditional class
    const backgroundDarkModeClass = classNames({
      "row create-todo-section custom-section": true,
      "custom-section-dark": darkMode,
    });

    const inputDarkModeClass = classNames({
      "addtodo-input": true,
      "addtodo-input-dark": darkMode,
    });

    return (
      <section className={backgroundDarkModeClass}>
        <div className="col col-12 px-4 d-flex align-items-center">
          <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
            {/* <input type="checkbox" name="checkbox" /> */}
            <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center">
              {/* <i className="uil uil-check text-center" /> */}
            </div>
          </div>
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <input
              className={inputDarkModeClass}
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
