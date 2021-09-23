import { Component } from "react";

import "./TodoCounter.scss";

export default class TodoCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.props;

    return <span className="todo-counter">{count} Items left</span>;
  }
}
