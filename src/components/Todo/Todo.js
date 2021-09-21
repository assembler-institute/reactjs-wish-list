import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: props.isFinished,
    };
  }

  render() {
    const { isFinished } = this.state;
    const { title, id } = this.props;

    return (
      <li className="list__todo" id={id} isFinished={isFinished}>
        {title}
      </li>
    );
  }
}
