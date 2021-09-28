import { React, Component } from "react";
import noTodo from "../../img/NoTodo.svg";
import "./NoTodo.scss";

export default class NoTodo extends Component {
  render() {
    return (
      <>
        <div className="notodo__message">
          <img src={noTodo} alt="Type a new task and start organizing!!" />
        </div>
      </>
    );
  }
}
