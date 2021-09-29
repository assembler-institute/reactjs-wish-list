import React from "react";
import "./NotToDo.scss";
import image from "../../img/undraw.svg";

function NotToDo() {
  return (
    <div className="d-flex flex-column p-3 align-items-center">
      <div>
        <h1 className="blue">Nothing to show you baby</h1>
        <p className="purple">Add something to start</p>
      </div>
      <div className="halfsize">
      <img className="undraw" src={image}></img>
      </div>


    </div> 
  )
}

export default NotToDo;

