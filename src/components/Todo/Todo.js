import React, { Component } from "react";

import { Draggable } from "react-beautiful-dnd";
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
    const { title, id, isFinished, isEditing, index, lightmode } = this.props;
    const editableText = isEditing ? (
      <input
        type="text"
        className="todo__text"
        onChange={this.handleTitleChange}
        onKeyDown={this.handleTitleChange}
        value={title}
        id={id}
        autoFocus
      />
    ) : (
      <span
        type="button"
        className="todo__text"
        onClick={this.handleEditChange}
        id={id}
      >
        {title}
      </span>
    );

    return (
      <Draggable draggableId={"draggable-" + id} index={index}>
        {(draggableProvided) => (
          <li
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
            className={"item__list--item" + (isFinished ? " finished" : "")}
            id={id}
            data-finished={isFinished}
          >
            <input
              type="checkbox"
              className={"todo__check" + (!lightmode ? "dark-mode" : "")}
              onChange={this.handleCheckChange}
              id={id}
              checked={isFinished && true}
            />

            {editableText}

            <button
              className={"todo__remove" + (!lightmode ? "dark-mode" : "")}
              id={id}
              onClick={this.onClick}
              type="button"
            >
              X
            </button>
          </li>
        )}
      </Draggable>
    );
  }
}
