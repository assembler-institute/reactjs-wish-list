import React, { Component } from "react";
import "./Todo.scss";

const classNames = require("classnames");

class Todo extends Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      todoText: text,
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
    document.getElementById(`input-${id}`).blur();
    handleEditedTodo(id, todoText, event);
  }

  render() {
    const { id, done, darkMode } = this.props;
    const { todoText } = this.state;

    // Disabled text classes
    const inputClasses = classNames({
      "edit-todo-input": true,
      "done-todo-text": done,
      "edit-todo-input-dark": darkMode,
    });

    const closeClasses = classNames({
      "close uil uil-times": true,
      "close-dark": darkMode,
    });

    return (
      <div
        id={id}
        className="todo-wrapper d-flex justify-content-center align-items-center px-4"
      >
        <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
          <input
            onChange={this.insideDoneTodo}
            type="checkbox"
            name="checkbox"
            defaultChecked={done}
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
            placeholder={todoText}
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
          <i className={closeClasses} />
        </button>
      </div>
    );
  }
}

export default Todo;
