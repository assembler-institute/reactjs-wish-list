/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import hero from "./img/hero.jpg";
import "./header.scss";
import "./main.scss";

function App() {
  return (
    <>
      <header>
        <div className="heroImg" alt="hero" src={hero}>
          <h1 className="TODOHeader">TODO</h1>
          <form>
            <input type="text" placeholder="Create task" />
          </form>
        </div>
      </header>
      <main className="container mt-5">
        <section className="row">
          <div className="col col-6">
            <label>
              <input type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
          <div className="col col-6">
            <label>
              <input type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
          <div className="col col-6">
            <label>
              <input type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
        </section>
        <section>
          <span>5 items left</span>
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
          <button type="button">Clear completed</button>
        </section>
      </main>
    </>
  );
}

export default App;
