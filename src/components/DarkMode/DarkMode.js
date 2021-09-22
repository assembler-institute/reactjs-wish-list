import React from "react";

import darkImg from "../../img/DarkMode.svg";

import lightImg from "../../img/lightMode.svg";

export default class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightmode: true,
    };

    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleDarkMode() {
    const { lightmode } = this.state;

    if (lightmode) {
      this.setState({ lightmode: false });
    } else {
      this.setState({ lightmode: true });
    }
  }

  render() {
    const { lightmode } = this.state;
    return (
      <button type="button" onClick={this.handleDarkMode}>
        <img src={lightmode ? darkImg : lightImg} alt="" />
      </button>
    );
  }
}
