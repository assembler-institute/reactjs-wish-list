import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.props;

    return <span>{count} Items left</span>;
  }
}
