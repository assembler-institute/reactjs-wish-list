import React from "react";

export default function Header() {
  return (
    <section className="header">
      <h1 className="title">TODO.DO</h1>
      <div className="dark-mode">
        <span icon={["fal", "code"]} />
      </div>
    </section>
  );
}
