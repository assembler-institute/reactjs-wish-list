import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.selected = this.selected.bind(this);
  }

  selected(event) {
    const { handleSelected } = this.props;
    // const { todos } = this.props;
    // const { todo } = this.props;
    handleSelected(event);
  }

  delete() {
    const { handleDelete } = this.props;
    const { todos } = this.props;
    const { todo } = this.props;
    handleDelete(todos, todo);
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <li className="Items">
          <Checkbox onChange={this.selected} />
          <div className="editableText">{text}</div>
          <Button onClick={this.delete} />
        </li>
      </div>
    );
  }
}

export default TodoItem;
