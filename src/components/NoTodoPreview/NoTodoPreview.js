import { Component } from "react";
import image from "../../img/undraw_wandering_mind_0mkm.svg";
import "./NoTodoPreview.scss";

export default class NoTodoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props;

    const messages = {
      "/": "There are no tasks. Get started and put some!",
      "/active": "It seems there's nothing to do yet. We need to do something!",
      "/completed": "There are no completed tasks. Come on, don't be lazy!",
    };

    return (
      <div className="no-todo">
        <img class="no-todo__image" src={image} />
        <h3 class="no-todo__title">{messages[pathname]}</h3>
      </div>
    );
  }
}
