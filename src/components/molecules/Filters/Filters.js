import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #e6e6e6;
  font-size: 1.2rem;
`

const NavItem = styled(NavLink)`
  color: #A4A4A4;
  background: white;
  border: none;
  font-size: bold;
  width: 33,3333%;

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
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  display:flex;
  align-items:center;
`;

const FilterButton = styled.button`
  color: #A4A4A4;
  background: white;
  border: none;
  font-size: bold;
  margin-left: auto;
  padding: 1.25rem;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    outline: none;
    box-shadow: none;
  }
`;

const ItemsNumber = styled.span`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  color: #A4A4A4;
`

function Filters({ filterTasks, removeAllCompletedTasks, filteredTasks }) {
  return (
    <StyledFilters>
      <ItemsNumber>{filteredTasks.length} items</ItemsNumber>
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
      <FilterButton
        name="clear"
        onClick={(e) => removeAllCompletedTasks(e)}
      >
        Clear completed
      </FilterButton>
    </StyledFilters>
  );
}

export default Filters;
