import React from "react";
import { Button, Checkbox } from "../Button/Button";
import "./TodoItem.scss";

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

export default TodoItem;
