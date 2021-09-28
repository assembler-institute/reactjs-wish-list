import React, { Component } from "react";

// Counts the todo left. Depends of the route of where it is

// eslint-disable-next-line react/prefer-stateless-function
export default class CounterToDo extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    console.log(this.props, "bb");
    const { quantity } = this.props;
    this.quantity = quantity;
  }

  render() {
    return (
      <div>
        <p>{this.quantity} items Left</p>
      </div>
    );
  }
}
