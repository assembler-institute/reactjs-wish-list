import { Component } from "react";
import image from "../../img/undraw_wandering_mind_0mkm.svg";
import "./NoTodoPreview.scss";

export default class NoTodoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="no-todo">
        <img class="no-todo__image" src={image}></img>
        <h3 class="no-todo__title">Nothing to do yet. Come on, don't be lazy!</h3>
      </div>
    );
  }
}
