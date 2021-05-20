import React, { Component } from "react";
// import TestDesign from "./pages/TestDesign";
import All from "./pages/All";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <All />;
  }
}

export default App;
