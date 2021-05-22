import React, { Component } from "react";

import "./BgPicture.scss";

class BgPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bgPicture">
        <img
          className="bgImg"
          alt="foto"
          src="https://images.pexels.com/photos/4215100/pexels-photo-4215100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    );
  }
}

export default BgPicture;
