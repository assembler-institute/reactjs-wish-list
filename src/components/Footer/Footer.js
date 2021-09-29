import { Component } from "react";
import TodoCounter from "../TodoCounter";
import TodoFilter from "../TodoFilter";
import Button from "../Button";

import "./Footer.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, handleClear } = this.props;

    return (
      <footer className="footer">
        <TodoCounter count={count} />
        <TodoFilter />
        <Button className="footer__button" handleClick={handleClear} data-testid="clear-completed-todos">
          Clear Completed
        </Button>
      </footer>
    );
  }
}
