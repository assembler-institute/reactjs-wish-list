import React from "react";
import Background from "./components/Background";
import "./App.scss";
import ChangeMode from "./components/ChangeMode";

function App() {
  return (
    <>
      <Background />
      <main className="container pt-5 main-width">
        <section className="row">
          <div className="col col-12">
            <header className="row">
              <h1>TODO</h1>
              <ChangeMode />
            </header>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
