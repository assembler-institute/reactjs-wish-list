import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };

    this.insideDoneTodo = this.insideDoneTodo.bind(this);
    this.insideDeleteTodo = this.insideDeleteTodo.bind(this);
  }

  insideDoneTodo() {
    const { todoText } = this.state;
    console.log(todoText);
    const { id, handleDone } = this.props;
    handleDone(id);
  }

  insideDeleteTodo() {
    const { id, handleDelete } = this.props;
    handleDelete(id);
  }

  render() {
    const { id, text, done } = this.props;

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
        {/* Add form */}
        <h4 className="todo-text">{text}</h4>
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
