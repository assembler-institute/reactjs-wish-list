import React from "react";
import "./Main.scss";
import mountainImg from "../../img/mountain.jpg";
import TodosContainer from "../TodosContainer";

function Main() {
  return (
    <main className="fullpage position-relative">
      <div className="fullcontent">
        <div className="container-fluid, h40">
          <div className="gradient" />
          <img src={mountainImg} alt="Mountain background" />
        </div>
        <div className="container-fluid h60 bg-light" />
      </div>
      <section className="container-sm position-absolute d-flex flex-column p-0 mainContent">
        <header className="d-flex flex-row justify-content-between mb-5">
          TODO
        </header>
        <aside className="bg-light d-flex flex-row rounded p-3 mb-4">
          Input
        </aside>
        <article className="bg-light d-flex flex-column shadow rounded toContent p-3">
          <TodosContainer />
        </article>
      </section>
    </main>
  );
}

export default Main;
