import { React, Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__left">X items left</div>
        <div className="footer__buttons">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
        <button type="button">Clear Completed</button>
      </div>
    );
  }
}

export default Footer;
