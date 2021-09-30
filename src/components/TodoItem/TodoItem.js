import { Component } from "react";

import { TodoItemStyled, FieldButton } from "./TodoItem.styled";
import FormUpdateTodo from "../FormUpdateTodo";
import DeleteButton from "../DeleteButton";
import CheckButton from "../CheckButton";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleSetText(text) {
    this.props.handleSetText(this.props.id, text);
  }

  handleSetDone() {
    this.props.handleSetDone(this.props.id);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  handleOpenForm() {
    this.props.handleIsEditing(this.props.id);
  }

  handleCloseForm() {
    this.props.handleIsEditing(null);
  }

  render() {
    const { text, isEditing, done } = this.props;

    return (
      <TodoItemStyled>
        <CheckButton onClick={this.handleSetDone} isEnabled={done} data-testid="todo-item-checkbox" />
        {isEditing ? (
          <FormUpdateTodo handleSetText={this.handleSetText} handleCloseForm={this.handleCloseForm} text={text} />
        ) : (
          <FieldButton isDone={done} onClick={this.handleOpenForm}>{text}</FieldButton>
        )}
        <DeleteButton onClick={this.handleDelete} data-testid="todo-item-delete-button" />
      </TodoItemStyled>
    );
  }
}
