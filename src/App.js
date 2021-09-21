import React from "react";
import Background from "./components/Background";
import Home from "./pages/home";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <h1>Hola mundo</h1>
          <Home />
          <Background />
        </div>
      </section>
    </main>
  );
}

export default App;
