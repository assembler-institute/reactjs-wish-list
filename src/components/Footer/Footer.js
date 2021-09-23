import { React, Component } from "react";

import "./Footer.scss";
import Button from "../FooterButton/FooterButton";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__left">X items left</div>
        <div className="footer__buttons">
          <Link to="/">
            <Button type="button" value="All" />
          </Link>
          <Link to="/active">
            <Button type="button" value="Active" />
          </Link>
          <Link to="/completed">
            <Button type="button" value="Completed" />
          </Link>
        </div>
        <Button type="button" value="Clear Completed" />
      </div>
    );
  }
}

export default Footer;
