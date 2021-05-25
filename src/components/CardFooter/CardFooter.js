import React, { Component } from "react";

import "./CardFooter.scss";

class CardFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDosToDo: 0,
    };
    this.leftToDos = this.leftToDos.bind(this);
  }

  leftToDos() {
    // eslint-disable-next-line no-unused-vars
    const { toDosToDo } = this.state;
  }

  render() {
    const { allToDos } = this.props;
    return (
      <section className="whiteBg gridFooter text-center">
        <p>{allToDos} items left</p>
        <div>All Active Completed</div>
        <div>Clear completed</div>
      </section>
    );
  }
}

export default CardFooter;
