import React from "react";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import "./ChangeMode.scss"

class ChangeMode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleTheme, isDarkMode } = this.props 
    return (
      <img className="change-mode" src={isDarkMode ? sunIcon : moonIcon} alt="change theme mode" onClick={handleTheme} />
    );
  }
}

export default ChangeMode;
