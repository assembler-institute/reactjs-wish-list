import React from "react";

function App() {
  return (
    <div className="position-relative">
      <section className="padding-15 mb-4 bg-image-hero"></section>
      <section className="container">
        <div className="card position-absolute absolute-center">
          <header className="card-header">
            <h1>TODO</h1>
            <input type="text" placeholder="insert text here" />
          </header>
          <main className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item is-disabled" aria-disabled="true">
              <input type="checkbox" name="name1" id="" />
              <label htmlFor="name1">(lo que venga del input de arriba)</label>
            </li>
            <li className="list-group-item">
              <input type="checkbox" name="name2" id="" />
              <label htmlFor="name2">(lo que venga del input de arriba)</label>
            </li>
            <li className="list-group-item">
              <input type="checkbox" name="name3" id="" />
              <label htmlFor="name3">(lo que venga del input de arriba)</label>
            </li>
            <li className="list-group-item">
              <input type="checkbox" name="name4" id="" />
              <label htmlFor="name4">(lo que venga del input de arriba)</label>
            </li>
          </ul>
          </main>
          <footer className="card-footer text-muted d-flex justify-content-between align-items-center">
            <span className="text-tag">5 items left</span>
            <div className="d-flex">
              <span className="text-tag">All</span>
              <span className="text-tag px-2">Active</span>
              <span className="text-tag">Completed</span>
            </div>
            <span className="text-tag">Clear Completed</span>
          </footer>
        </div>
        <footer className="text-center">
          <p>Drag and drop to reorder list</p>
        </footer>
      </section>
    </div>
  );
}

export default App;
