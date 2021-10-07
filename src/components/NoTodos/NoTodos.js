import { Component } from "react";

import { Image, NoTodosStyled, Title } from "./NoTodos.styled";

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
      <NoTodosStyled>
        <Image data-testid="no-todos" />
        <Title>{messages[pathname]}</Title>
      </NoTodosStyled>
    );
  }
}
