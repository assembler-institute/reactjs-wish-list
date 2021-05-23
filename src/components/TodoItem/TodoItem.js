import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    // const { handleDelete } = this.props;
    const { text } = this.props;
    // eslint-disable-next-line
    console.log();
    return (
      <div>
        <li className="Items">
          <Checkbox handleSelected={this.handleSelected} />
          {text}
          <Button handleDelete={this.handleDelete} />
        </li>
      </div>
    );
  }
}
/*
const TodoItem = ({ text }) => {
  return (
    <div>
      <li className="Items">
        <Checkbox />
        {text}
        <Button />
      </li>
    </div>
  );
};
*/

export default TodoItem;
