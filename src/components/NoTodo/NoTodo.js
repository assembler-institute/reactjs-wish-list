import { React, Component } from "react";
import "./NoTodo.scss";

class NoTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="notodo__img"></div>
        <div className="notodo__message">
          Type a new task and start organizing!!
        </div>
      </>
    );
  }
}
export default NoTodo;
