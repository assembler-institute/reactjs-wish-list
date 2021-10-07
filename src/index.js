import ReactDOM from "react-dom";
import React from "react";
import { withRouter } from "react-router";

import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter/>
  </React.StrictMode>,
  document.getElementById("root"),
);
