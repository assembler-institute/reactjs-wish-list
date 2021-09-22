import React, { Component } from "react";
import "./Todo.scss";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(event) {
    const { removeTask } = this.props;
    removeTask(event.target.id);
  }

  onChange(event) {
    const { completeTask } = this.props;
    completeTask(event.target.id);
  }

  render() {
    const { title, id, isFinished } = this.props;

    return (
      <li
        className={"list__todo" + (isFinished === true ? " finished" : "")}
        id={id}
        data-finished={isFinished}
      >
        <input
          type="checkbox"
          className="todo__check"
          onChange={this.onChange}
          id={id}
        />
        <p>{title}</p>
        <button id={id} onClick={this.onClick} type="button">
          X
        </button>
      </li>
    );
  }
}
