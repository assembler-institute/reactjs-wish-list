import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
// import components

// import style
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={() => <Home />} />
      <Route path="/completed" render={() => <Completed />} />
      <Route path="/active" render={() => <Active />} />
    </BrowserRouter>
  );
}

export default App;
