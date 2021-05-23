import React from "react";

import Footer from "../Footer";

import Header from "../Header";
import Todo from "../Todo";

import "../../_App.scss";

function Complete({ todos }) {
  return (
    <>
      <main className="background_container">
        <Header />
        <section className="parent_container">
          <h1>TODO</h1>
          <Todo todos={todos} />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Complete;
