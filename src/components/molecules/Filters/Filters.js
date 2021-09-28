import styled from "styled-components";

import { NavItem } from "components/atoms";

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-size: 1.2rem;
`;

const NavList = styled.nav`
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const FilterButton = styled.button`
  color: ${(props) => props.theme.titleColor };
  background: ${(props) => props.theme.pageBackground };
  border: none;
  font-size: bold;
  margin-left: auto;
  padding: 1.25rem;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.titleColor };
    font-weight:bold;
    outline: none;
    box-shadow: none;
  }
`;

const ItemsNumber = styled.span`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  color: #a4a4a4;
`;

function Filters({ filterTasks, removeAllCompletedTasks, filteredTasks }) {
  return (
    <StyledFilters>
      <ItemsNumber>{filteredTasks.length} items left</ItemsNumber>
      <NavList>
        <NavItem
          name="all"
          filterTasks={filterTasks}
          to="/"
        />
        <NavItem
          name="active"
          filterTasks={filterTasks}
          to="/active"
        />
        <NavItem
          name="complete"
          filterTasks={filterTasks}
          to="/complete"
        />
      </NavList>
      <FilterButton name="clear" onClick={(e) => removeAllCompletedTasks(e)}>
        Clear completed
      </FilterButton>
    </StyledFilters>
  );
}

export default Filters;
