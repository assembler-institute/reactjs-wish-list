import React from "react";
import "./Main.scss";

function Main({ children, ...props}) {
  return (
    <main className="fullpage position-relative" {...props}>
      {children}
    </main>
  );
}
export default Main;