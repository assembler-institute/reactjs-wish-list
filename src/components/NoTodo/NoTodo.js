import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/noTodo.svg";
import "./NoTodo.scss";

function NoTodo({ darkMode }) {
  return (
    <section className={darkMode ? "todo-list dark" : "todo-list"}>
      <ul>
        <li className="img">
          <h1 className={darkMode ? "text dark" : "text"}>
            There are no records, you should create one{" "}
            <FontAwesomeIcon
              icon={faSmile}
              className={darkMode ? "svg dark" : "svg"}
            />
          </h1>
          <img src={image} alt="img" />
        </li>
      </ul>
    </section>
  );
}

export default NoTodo;
