import React from "react";

import "./CardFooter.scss";

export default function CardFooter({ activeTodos }) {
  return (
    <section className="whiteBg gridFooter text-center">
      <p>{activeTodos} items left</p>
      <div>All Active Completed</div>
      <div>Clear completed</div>
    </section>
  );
}
