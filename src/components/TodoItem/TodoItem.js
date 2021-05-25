import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);

    this.submitTitle = this.submitTitle.bind(this);

    this.docloseEditMode = this.docloseEditMode.bind(this);
    this.selected = this.selected.bind(this);
  }

  selected() {
    const { handleSelected, todo } = this.props;
    handleSelected(todo.id);
  }

  delete() {
    const { handleDelete, todo } = this.props;
    handleDelete(todo.id);
  }

  submitTitle(e) {
    const { submitNewTitle, todo } = this.props;
    submitNewTitle(e.target.value, todo.id);
  }

  docloseEditMode = (event) => {
    this.closeEditMode(event);
  };

  render() {
    const { text, todo } = this.props;

    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <div>
        <li className="Items">
          <Checkbox onChange={this.selected} checked={todo.selected} />
          <div className="editableText" onDoubleClick={this.handleEditing}>
            {text}
          </div>
          <form onSubmit={this.closeEditMode}>
            <input
              type="text"
              style={editMode}
              className="textInput"
              onChange={this.submitTitle}
            />
          </form>
          <Button onClick={this.delete} />
        </li>
      </div>
    );
  }
}

export default TodoItem;
