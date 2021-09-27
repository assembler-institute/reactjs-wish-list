import classNames from "classnames";
import React from "react";
import "./Background.scss";

export default class Background extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isDarkMode } = this.props
    const backgroundClass = classNames({ "bg-dark": isDarkMode }, { "bg-light": !isDarkMode })
    const backgroundImgClass = classNames({ "background-img-dark": isDarkMode })

    return (
      <div className={`background w-100 h-100 position-absolute ${backgroundClass}`}>
        <div className={`background-img ${backgroundImgClass}`}></div>
      </div>
    );
  }
}