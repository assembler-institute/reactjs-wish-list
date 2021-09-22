import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, children } = this.props;

    return (
      <button className="btn" onClick={handleClick}>
        {children}
      </button>
    );
  }
}
