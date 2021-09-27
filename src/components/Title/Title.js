/* eslint-disable prettier/prettier */
import React from "react";

import "./Title.scss";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1 className="title display-1 text-white text-center m-5 font-weight-bold">
        <strong>To Do List</strong>
      </h1>
    );
  }
}
