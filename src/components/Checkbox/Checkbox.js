import React, { Component } from "react";

import "./Checkbox.scss";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.defaultChecked,
      taskId: props.taskId,
    };
    this.toggleChange = this.toggleChange.bind(this);
    this.handleToggleCheck = props.handleToggleCheck;
  }

  toggleChange() {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
    const { taskId } = this.state;
    this.handleToggleCheck(taskId);
  }

  render() {
    const { taskId, isChecked } = this.state;
    return (
      <div className="round-checkbox">
        <input
          id={taskId}
          type="checkbox"
          defaultChecked={isChecked}
          onChange={this.toggleChange}
        />
        {/* eslint-disable-next-line */}
        <label htmlFor={taskId} />
      </div>
    );
  }
}

export default Checkbox;
