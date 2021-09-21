import React from "react";
import "./Background.scss";

class Background extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="background">
        <div className="background-img"></div>
      </div>
    );
  }
}

export default Background;
