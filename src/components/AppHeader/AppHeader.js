import React from "react";
import "./AppHeader.scss";
import DarkButton from "../DarkButton";

function AppHeader() {
  return (
    <header className="d-flex flex-row justify-content-between mb-4">
      <h1 className="title">TODO</h1>
      <DarkButton />
    </header>
  );
}

export default AppHeader;
