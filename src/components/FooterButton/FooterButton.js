import React, { Component } from "react";

export default class FooterButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props;
    return <button type="button">{value}</button>;
  }
}
