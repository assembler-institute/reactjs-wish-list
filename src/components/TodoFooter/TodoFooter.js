import { Component } from "react";
import TodoCounter from "../TodoCounter";
import TodoFilter from "../TodoFilter";
import Button from "../Button";

import "./TodoFooter.scss";

export default class TodoFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, handleClear } = this.props;

    return (
      <footer className="todo-footer">
        <TodoCounter count={count} />
        <TodoFilter />
        <Button className="todo-footer__button" handleClick={handleClear} data-testid="clear-completed-todos">
          Clear Completed
        </Button>
      </footer>
    );
  }
}
