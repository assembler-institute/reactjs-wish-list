import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./TodoFilter.scss";

export default class TodoFilter extends Component {
  constructor(props) {
    super(props);
  }
  filterAll() {}

  filterActive() {}

  filterCompleted() {}

  render() {
    return (
      <ul className="todo-filter">
        <li className="todo-link">
          <NavLink exact to="/" className="todo-filter__link" activeClassName="todo-filter__link--selected">
            All
          </NavLink>
        </li>
        <li className="todo-link">
          <NavLink to="/active" className="todo-filter__link" activeClassName="todo-filter__link--selected">
            Active
          </NavLink>
        </li>
        <li className="todo-link">
          <NavLink to="/completed" className="todo-filter__link" activeClassName="todo-filter__link--selected">
            Completed
          </NavLink>
        </li>
      </ul>
    );
  }
}
