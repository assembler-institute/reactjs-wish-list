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

      <main className="main container ">
        <section className="row">
          <div className="main__todo col col-12">
            <label>
              <input className="mx-4" type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
          <div className="main__todo col col-12">
            <label>
              <input className="mx-4" type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
          <div className="main__todo col col-12">
            <label>
              <input className="mx-4" type="checkbox" name="name" />
              Jog around the park
            </label>
          </div>
        </section>
        <section className="row main__footer">
          <span>5 items left</span>
          <div>
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
          </div>
          <button type="button">Clear completed</button>
        </section>
      </main>
    </>
  );
}

export default App;
