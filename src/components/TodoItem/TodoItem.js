import { Component } from "react";
import TodoItemForm from "../TodoItemForm";
import CheckBox from "../CheckBox";
import Button from "../Button";

import "./TodoItem.scss";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEnableForm = this.handleEnableForm.bind(this);
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

  handleEnableForm() {
    this.props.handleEnableForm(this.props.id);
  }

  render() {
    const { text, enabledForm, handleDisableForm } = this.props;

    return (
      <>
        <article className="todo-item">
          <CheckBox handleChange={this.handleSetDone} />
          {enabledForm ? (
            <TodoItemForm handleSetText={this.handleSetText} handleDisableForm={handleDisableForm} text={text} />
          ) : (
            <Button className="todo-item__button todo-item__button--full-width" handleClick={this.handleEnableForm}>
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
