import React from "react";
import "./home.scss";


function renderHome() {
return (
    <main className="container mt-5">
      <div className="container-lg">
        <h1>TO DO</h1>
      </div>
        <section className="row container-lg input__todo">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div>
        </section>
        <section className="row container-lg">
          <div className="todo__list__container container-lg">
            <ul>
            </ul>
          </div>
          <div className="footer">
            <div className="row counter__container">
              <span>1</span><p>Tasks Left</p>
            </div>
            <div className="btn__group">
              <button type="button" className="btn">All</button>
              <button type="button" className="btn">Active</button>
              <button type="button" className="btn">Completed</button>
            </div>
            <button type="button" className="btn btn__clr">Clear Completed</button>
          </div>
        </section>
      </main>
      
    );
  }

  export default renderHome
  