import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, className = "button", children } = this.props;

    return (
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    );
  }
}
