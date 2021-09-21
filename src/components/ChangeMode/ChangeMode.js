import React from "react";
import moonIcon from "../../assets/icons/moon.svg";

class ChangeMode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="change-mode" src={moonIcon} alt="change theme mode" />
    );
  }
}

export default ChangeMode;
