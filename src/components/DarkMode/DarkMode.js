import React from "react";

import darkImg from "../../img/DarkMode.svg";

import lightImg from "../../img/lightMode.svg";

import bgDarkImg from "../../img/header-dark-mode-background-image.jpeg";
import bgLightImg from "../../img/header-light-mode-background-image.jpeg";

import "./darkMode.scss";
import { element } from "prop-types";

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

  componentDidUpdate() {
    const { lightmode } = this.state;

    if (!lightmode) {
      document.getElementById("bg-top").src = bgDarkImg;
    } else {
      document.getElementById("bg-top").src = bgLightImg;
    }

    document.querySelector(".new__task").classList.toggle("dark-mode");
    document.querySelector(".new__task--input").classList.toggle("dark-mode");
    document.querySelector(".todo__body").classList.toggle("dark-mode");
    document.querySelector(".background--bottom").classList.toggle("dark-mode");
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
