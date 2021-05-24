import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete() {
    const { handleDelete } = this.props;
    const { todos } = this.props;
    const { todo } = this.props;
    handleDelete(todos, todo);
  }
  /*
  editItem() {
    const { text } = this.props;

  }
  */

  render() {
    const { text } = this.props;

    return (
      <div>
        <li className="Items">
          <Checkbox handleSelected={this.handleSelected} />
          <div className="editableText">{text}</div>
          <Button onClick={this.delete} />
        </li>
      </div>
    );
  }
}

export default TodoItem;
