import { React, Component } from "react";

import "./Footer.scss";
import Button from "../FooterButton/FooterButton";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  clearCompleted() {
    const { clearCompletedTasks } = this.props;
    return clearCompletedTasks();
  }

  render() {
    const { activeTasks } = this.props;
    return (
      <div className="footer">
        <div className="footer__left">{`${activeTasks.length} items left`}</div>
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
        <Button
          type="button"
          value="Clear Completed"
          onClick={this.clearCompleted}
        />
      </div>
    );
  }
}

export default Footer;
