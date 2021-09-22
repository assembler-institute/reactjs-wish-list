import { React, Component } from "react";
import "./NoTodo.scss";

class NoTodo extends Component {
  render() {
    return (
      <>
        <div className="notodo__img" />
        <div className="notodo__message">
          Type a new task and start organizing!!
        </div>
      </>
    );
  }
}
export default NoTodo;
