import { Component } from "react";
import TodoSetTextForm from "../TodoSetTextForm";
import CheckBox from "../CheckBox";
import Button from "../Button";

import "./TodoItem.scss";

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

  handleSetDone(checked) {
    this.props.handleSetDone(this.props.id, checked);
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

    const articleStyles = !done ? "todo-item" : "todo-item todo-item--done";
    const editButtonStyles = !done
      ? "todo-item__button todo-item__button--full-width"
      : "todo-item__button todo-item__button--full-width todo-item__button--done";

    return (
      <>
        <article className={articleStyles}>
          <CheckBox checked={done} handleChange={this.handleSetDone} />
          {isEditing ? (
            <TodoSetTextForm handleSetText={this.handleSetText} handleCloseForm={this.handleCloseForm} text={text} />
          ) : (
            <Button className={editButtonStyles} handleClick={this.handleOpenForm}>
              {text}
            </Button>
          )}
          <Button className="todo-item__button todo-item__button--round" handleClick={this.handleDelete}>
            {"\u00d7"}
          </Button>
        </article>
      </>
    );
  }
}
