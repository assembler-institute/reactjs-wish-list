import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/noTodo.svg";
import "./NoTodo.scss";

function NoTodo() {
  return (
    <section className="todo-list">
      <ul>
        <li className="img">
          <img src={image} alt="img" />
          <h1 className="text">
            There are no records, you should create one{" "}
            <FontAwesomeIcon icon={faSmile} className="svg" />
          </h1>
        </li>
      </ul>
    </section>
  );
}

export default NoTodo;
