import { Component } from "react";
import TodoSetTextForm from "../TodoSetTextForm";
import Button from "../Button";
import DeleteButton from "../DeleteButton";
import CheckButton from "../CheckButton";

import styled, { css } from "styled-components";

import "./TodoItem.scss";

const FieldButtonDone = css`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: line-through;
`;

const FieldButton = styled.button`
  width: 100%;
  padding: 0.5rem;

  cursor: pointer;
  user-select: none;

  text-align: left;

  border-radius: 0.25rem;
  border: none;
  outline: none;

  box-shadow: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25); 
    background: linear-gradient(135deg, rgba(64, 128, 180, 0.25) 0%, rgba(240, 40, 252, 0.25) 100%);
    color: gray;
  }

  ${({ done }) => done && FieldButtonDone}
`;

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
    const { provided, text, isEditing, done } = this.props;

    const articleStyles = !done ? "todo-item" : "todo-item todo-item--done";
    const editButtonStyles = !done ? "todo-item__field-button" : "todo-item__field-button todo-item__field-button--done";

    return (
      <>
        <article className={articleStyles} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <CheckButton handleClick={this.handleSetDone} isEnabled={done} data-testid="todo-item-checkbox" />
          {isEditing ? (
            <TodoSetTextForm handleSetText={this.handleSetText} handleCloseForm={this.handleCloseForm} text={text} />
          ) : (
            <Button className={editButtonStyles} onClick={this.handleOpenForm}>
              {text}
            </Button>
          )}
          <DeleteButton handleClick={this.handleDelete} data-testid="todo-item-delete-button" />
        </article>
      </>
    );
  }
}
