import { Component } from "react";

import { FooterButton, FooterStyled } from "./Footer.styled.js";
import Counter from "../Counter";
import Filter from "../Filter";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, handleClear } = this.props;

    return (
      <FooterStyled>
        <Counter count={count} />
        <Filter />
        <FooterButton onClick={handleClear} data-testid="clear-completed-todos">Clear Completed</FooterButton>
      </FooterStyled>
    );
  }
}
