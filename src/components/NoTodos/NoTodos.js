import { Component } from "react";
import image from "../../img/undraw_wandering_mind_0mkm.svg";
import "./NoTodos.scss";

export default class NoTodos extends Component {
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
      <div className="no-todos">
        <img class="no-todos__image" src={image} data-testid="no-todos" />
        <h3 class="no-todos__title">{messages[pathname]}</h3>
      </div>
    );
  }
}
