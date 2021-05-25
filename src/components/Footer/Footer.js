import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="centerText">
        <p className="font-size-10 gray-color">Drag and drop to reorder list</p>
      </footer>
    );
  }
}

export default Footer;
