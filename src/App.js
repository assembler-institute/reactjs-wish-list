import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
// import components

// import style
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={() => <Home />} />
        <Route path="/completed" render={() => <Completed />} />
        <Route path="/active" render={() => <Active />} />
      </BrowserRouter>
    );
  }
}

export default App;
