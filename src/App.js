import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider, Title, Meta } from "react-head";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <HeadProvider>
        <Title>Title of page</Title>
        <Meta name="example" content="whatever" />
      </HeadProvider>
      <Home />
    </BrowserRouter>
  );
}

export default App;
