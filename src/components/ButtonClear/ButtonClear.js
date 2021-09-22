import React from "react";

export default class ButtonClear extends React.Component {
  constructor(props) {
    super(props);
  }
  clearCompleted() {}
  render() {
    return <button className="btn">Clear Completed</button>;
  }
}
