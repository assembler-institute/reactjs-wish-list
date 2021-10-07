import { Component } from "react";

import { FilterLink, FilterStyled } from "./Filter.styled.js";

export default class TodoFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeStyle = { fontWeight: 600, color: "#4094C0" };

    return (
      <FilterStyled>
        <FilterLink exact to="/" activeStyle={activeStyle}>All</FilterLink>
        <FilterLink exact to="/active" activeStyle={activeStyle}>Active</FilterLink>
        <FilterLink exact to="/completed" activeStyle={activeStyle}>Completed</FilterLink>
      </FilterStyled>
    );
  }
}
