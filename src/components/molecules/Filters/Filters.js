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
  border-bottom: 1px solid #e6e6e6;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size: 1.2rem;
`;

const FilterButton = styled.button`
  color: grey;
  background: white;
  border: none;
  font-size: bold;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    outline: none;
    box-shadow: none;
  }
`;

function Filters({ filterTasks,removeAllCompletedTasks }) {
  return (
      <NavList>
        <div>
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
        </div>
        <div>
          <FilterButton
            name="clear"
            onClick={(e) => removeAllCompletedTasks(e)}
          >
            Clear completed
          </FilterButton>
        </div>
      </NavList>
  );
}

export default Filters;
