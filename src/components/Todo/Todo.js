import React, { Component } from "react";
import "./Todo.scss";

const classNames = require("classnames");

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };

    this.insideDoneTodo = this.insideDoneTodo.bind(this);
    this.insideDeleteTodo = this.insideDeleteTodo.bind(this);
    this.insideFocusText = this.insideFocusText.bind(this);
    this.insideEditedText = this.insideEditedText.bind(this);
    this.insideEditedTodo = this.insideEditedTodo.bind(this);
  }

  insideDoneTodo(event) {
    const { id, handleDone } = this.props;
    handleDone(id, event);
  }

  insideDeleteTodo() {
    const { id, handleDelete } = this.props;
    handleDelete(id);
  }

  insideFocusText() {
    const { text } = this.props;
    this.setState({
      todoText: text,
    });
  }

  insideEditedText(event) {
    this.setState({
      todoText: event.target.value,
    });
  }

  insideEditedTodo(event) {
    event.preventDefault();
    const { id, handleEditedTodo } = this.props;
    const { todoText } = this.state;
    handleEditedTodo(id, todoText);
  }

  render() {
    const { id, text, done } = this.props;
    const { todoText } = this.state;

    // Disabled text classes
    const inputClasses = classNames({
      "edit-todo-input": true,
      "done-todo-text": done,
    });

    return (
      <div
        id={id}
        done={done}
        className="todo-wrapper d-flex justify-content-center align-items-center px-4"
      >
        <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
          <input
            onChange={this.insideDoneTodo}
            type="checkbox"
            name="checkbox"
          />
          <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center">
            <i className="uil uil-check text-center" />
          </div>
        </div>
        <form onSubmit={this.insideEditedTodo}>
          <input
            className={inputClasses}
            name="edit-todo-input"
            id={`input-${id}`}
            type="text"
            placeholder={text}
            value={todoText}
            onChange={this.insideEditedText}
            onFocus={this.insideFocusText}
          />
        </form>
        <button
          type="button"
          onClick={this.insideDeleteTodo}
          className="d-flex justify-content-center align-items-center"
        >
          <i className="close uil uil-times" />
        </button>
      </div>
    );
  }
}

export default Todo;
