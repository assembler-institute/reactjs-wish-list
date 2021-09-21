import { React, Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="footer__left">X items left</div>
        <div className="footer__buttons">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default Footer;
