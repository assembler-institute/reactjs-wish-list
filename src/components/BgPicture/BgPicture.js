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
          src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          // src="https://images.pexels.com/photos/6439051/pexels-photo-6439051.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
      </div>
    );
  }
}

export default BgPicture;
