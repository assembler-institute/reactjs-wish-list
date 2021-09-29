/* has a todo title adn a todo switch for dark and light mode
 has a child input */

import React, { Component } from "react";
import TaskInput from "../TaskInput";
import moon from "./moon_icon.png";

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  constructor(props) {
    super(props);
    const { handleSubmit } = this.props;
    this.handleSubmit = handleSubmit;
  }

  render() {
    return (
      <header>
        <div className="header__title d-flex justify-content-between">
          <h1>T O D O</h1>
          <img src={moon} alt="dark-mode" />
        </div>
        <TaskInput handleSubmit={this.handleSubmit} {...this.props} />
      </header>
    );
  }
}
