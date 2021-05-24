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
    const { handleSelected } = this.props;
    const { todos } = this.props;
    const { todo } = this.props;
    handleSelected(todos, todo);
  }

  delete() {
    const { handleDelete } = this.props;
    const { todos } = this.props;
    const { todo } = this.props;
    handleDelete(todos, todo);
  }

  submitTitle(e) {
    const { submitNewTitle } = this.props;
    const { todo } = this.props;
    // eslint-disable-next-line
    console.log(e.target.value);

    submitNewTitle(e.target.value, todo.id);
    // eslint-disable-next-line
    console.log(todo.id, todo);
  }

  docloseEditMode = (event) => {
    this.closeEditMode(event);
  };

  render() {
    const { text } = this.props;
    const { todo } = this.props;

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
