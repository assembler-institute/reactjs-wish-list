import React, { Component } from "react";

export default class FooterButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, onClick } = this.props;
    if (onClick)
      return (
        <button onClick={onClick} type="button">
          {value}
        </button>
      );
    return <button type="button">{value}</button>;
  }
}
