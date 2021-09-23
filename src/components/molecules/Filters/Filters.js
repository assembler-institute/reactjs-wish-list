import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = styled(NavLink)`
  color: grey;
  background: white;
  border: none;
  font-size: bold;

  &:hover,
  &:focus,
  &.active {
    color: black;
    background-color: white;
    outline: none;
    box-shadow: none;
  }
`;

const NavList = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #E6E6E6;
`;

function Filters({ filterTasks }) {
  return (
    <NavList>
      <NavItem
        exact
        activeClassName="active"
        className="navbar-brand"
        name="all"
        onClick={(e) => filterTasks(e.target.name)}
        to="/"
      >
        All
      </NavItem>
      <NavItem
        exact
        activeClassName="active"
        className="navbar-brand"
        name="active"
        onClick={(e) => filterTasks(e.target.name)}
        to="/active"
      >
        Active
      </NavItem>
      <NavItem
        exact
        activeClassName="active"
        className="navbar-brand"
        name="complete"
        onClick={(e) => filterTasks(e.target.name)}
        to="/complete"
      >
        Complete
      </NavItem>
    </NavList>
  );
}

export default Filters;
