import React, { Component } from "react";

import "./CardFooter.scss";

class CardFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="whiteBg gridFooter text-center">
        <p>5 items left</p>
        <div>All Active Completed</div>
        <div>Clear completed</div>
      </section>
    );
  }
}

export default CardFooter;
