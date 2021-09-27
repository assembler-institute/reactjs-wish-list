import React, { Component } from "react";
import "./CheckButton.scss";

export default class CheckButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick = () => {}, isEnabled } = this.props;

    const styles = !isEnabled ? "check-button" : "check-button check-button--enabled";

    return <button className={styles} onClick={handleClick} />;
  }
}
