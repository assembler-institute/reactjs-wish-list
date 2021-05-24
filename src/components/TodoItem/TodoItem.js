import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
    this.delete = this.delete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  delete() {
    const { handleDelete } = this.props;
    const { todos } = this.props;
    const { todo } = this.props;
    handleDelete(todos, todo);
  }

  editSubmit(e) {
    e.preventDefault();
    const { ...editedTodo } = this.state;
    const { todo } = this.props;

    // eslint-disable-next-line
    console.log("new console", editedTodo, todo.title);
    this.setState({});
  }

  render() {
    const { text } = this.props;
    // const { todo } = this.props;

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
          <Checkbox handleSelected={this.handleSelected} />
          <div className="editableText" onDoubleClick={this.handleEditing}>
            {text}
          </div>
          <form onSubmit={this.editSubmit}>
            <input
              type="text"
              style={editMode}
              className="textInput"
              // value={text}
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
