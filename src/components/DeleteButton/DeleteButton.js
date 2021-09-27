import React, { Component } from "react";
import "./DeleteButton.scss";

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick = () => {} } = this.props;

    return <button className="delete-button" onClick={handleClick} />;
  }
}
