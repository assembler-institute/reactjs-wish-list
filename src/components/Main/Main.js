import React from "react";
import "./Main.scss";

function Main({ children, ...props }) {
  return (
    <main {...props} className="main-list">
      {children}
    </main>
  );
}

export default Main;
