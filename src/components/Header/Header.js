import { Component } from "react";
import "./Header.scss";
import Switch from "../Switch";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleTheme, isDarkMode } = this.props;

    return (
      <header className="top">
        <h1 className="app-title">TODO</h1>
        <Switch handleTheme={handleTheme} isDarkMode={isDarkMode} />
      </header>
    );
  }
}
