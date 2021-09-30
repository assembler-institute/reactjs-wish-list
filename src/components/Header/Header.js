import { Component } from "react";

import { HeaderStyled, Title } from "./Header.styled";
import ThemeSwitch from "../ThemeSwitch";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleTheme, isDarkMode } = this.props;

    return (
      <HeaderStyled>
        <Title>TODO</Title>
        <ThemeSwitch onClick={handleTheme} isDarkMode={isDarkMode} />
      </HeaderStyled>
    );
  }
}
