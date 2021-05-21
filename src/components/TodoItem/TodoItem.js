import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";
import newForm from "../Form";

class TodoItem extends newForm {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
  }

  render() {
    // const { handleSelected } = this.props;
    const { text } = this.props;
    // eslint-disable-next-line
    console.log(this.handleSelected);
    return (
      <div>
        <li className="Items">
          <Checkbox handleSelected={this.handleSelected} />
          {text}
          <Button />
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
