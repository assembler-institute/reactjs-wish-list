import React, { Component } from "react";
import "./Todo.scss";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  onClick(event) {
    const { removeTask } = this.props;
    removeTask(event.target.id);
  }

  handleCheckChange(event) {
    const { completeTask } = this.props;
    completeTask(event.target.id);
  }

  handleTitleChange(event) {
    const { changeTitle, editTask } = this.props;
    changeTitle(event.target);

    if (event.key === "Enter") {
      editTask(event.target.id);
    }
  }

  handleEditChange(event) {
    const { editTask } = this.props;
    editTask(event.target.id);
  }

  render() {
    const { title, id, isFinished, isEditing, lightmode } = this.props;
    const editableText =
      isEditing === true ? (
        <input
          type="text"
          className="todo__text"
          onChange={this.handleTitleChange}
          onKeyDown={this.handleTitleChange}
          value={title}
          id={id}
        />
      ) : (
        <button
          type="button"
          className="todo__text"
          onClick={this.handleEditChange}
          id={id}
        >
          {title}
        </button>
      );

    return (
      <li
        className={
          "item__list--item" + (isFinished === true ? " finished" : "")
        }
        id={id}
        data-finished={isFinished}
      >
        <input
          type="checkbox"
          className={"todo__check" + (lightmode === false ? "dark-mode" : "")}
          onChange={this.handleCheckChange}
          id={id}
          checked={isFinished === true && true}
        />

        {editableText}

        <button
          className={"todo__remove" + (lightmode === false ? "dark-mode" : "")}
          id={id}
          onClick={this.onClick}
          type="button"
        >
          .
        </button>
      </li>
    );
  }
}
