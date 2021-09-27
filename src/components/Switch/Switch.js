import { Component } from "react";
import moonSVG from "../../img/moon-svgrepo-com.svg";
import sunSVG from "../../img/sun-svgrepo-com.svg";

import "./Switch.scss";

export default class Switch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleTheme, isDarkMode } = this.props;

    const image = isDarkMode ? moonSVG : sunSVG;
    return <img className="theme-switch__image" src={image} onClick={handleTheme} />;
  }
}
