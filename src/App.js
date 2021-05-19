/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import hero from "./img/hero.jpg";
import "./header.scss";
import "./main.scss";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__prb">
          <img className="img-fluid" alt="hero" src={hero} />
        </div>
        {/* <h1>TODO</h1>
        <form>
          <input type="text" placeholder="Create task" />
        </form> */}
      </header>

      <main className="main container mt-3">
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
