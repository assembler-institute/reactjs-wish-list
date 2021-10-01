import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      newValue: e.target.value,
    });
  };
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.handleEnter(this.state.newValue);
      this.setState({
        newValue: "",
      });
    }
  };

  render() {
    const { newValue } = this.state;
    return (
      <>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Insert any activity... "
            className="input__text"
            aria-label="Insert any activity..."
            value={newValue}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <div></div>
        </div>
      </>
    );
  }
}

export default Input;
