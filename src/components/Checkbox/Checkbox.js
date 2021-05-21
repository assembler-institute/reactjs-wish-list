import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.defaultChecked,
      // taskId: props.taskId,
    };
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange() {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
    // TODO toggle overlined text
  }

  render() {
    const { isChecked } = this.state;
    return (
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={this.toggleChange}
      />
    );
  }
}

export default Checkbox;
