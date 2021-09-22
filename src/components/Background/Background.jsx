import React from "react";
import "./Background.scss";

export default class Background extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="background w-100 h-100 position-absolute bg-light">
        <div className="background-img"></div>
      </div>
    );
  }
}