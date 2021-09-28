import React, { Component } from "react";
import { Button } from "react-bootstrap";

import FooterNav from "../FooterNav";

// has the counter part of the footer
// has also a footer_nav with the pages for displaying the dif todos
// has a button for clear completed tasks

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component {
  constructor(props) {
    super(props);
    const { startDemo } = this.props;
    this.startDemo = startDemo;

    const { clearCompleted } = this.props;
    this.clearCompleted = clearCompleted;
  }

  render() {
    return (
      <footer className="d-flex flex-column p-4">
        <div className="d-flex justify-content-between">
          <FooterNav {...this.props} />
        </div>
        <div className="d-flex justify-content-between">
          <Button onClick={() => this.startDemo()}>Demo</Button>
          <Button onClick={() => this.clearCompleted()}>Clear Completed</Button>
          <Button onClick={() => localStorage.clear()}>Clear All</Button>
        </div>
      </footer>
    );
  }
}
