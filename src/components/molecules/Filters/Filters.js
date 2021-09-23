import styled from "styled-components";

const FilterButton = styled.button`
  color: grey;
  background: white;
  border: none;
  font-size: bold;
  &:hover {
    color: black;
    background-color: white;
    outline: none;
  }
  &:active {
    color: black;
    background-color: white;
    outline: none;
  }
  &:focus {
    color: black;
    background-color: white;
    outline: none;
  }
`;

const FooterFilters = styled.footer`
  padding: 0em 2rem 1rem 2rem;
`;

function Filters({ filteredTasks, filterTasks, removeAllCompletedTasks }) {
  return (
    <FooterFilters>
      <div className="d-flex justify-content-between pt-3">
        <p>{filteredTasks.length} items</p>
        <div>
          <FilterButton
            className="btn btn-secondary"
            name="all"
            onClick={(e) => filterTasks(e.target.name)}
          >
            All
          </FilterButton>
          <FilterButton
            className="btn btn-secondary"
            name="active"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Active
          </FilterButton>
          <FilterButton
            className="btn btn-secondary"
            name="complete"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Complete
          </FilterButton>
        </div>
        <FilterButton
          className="btn btn-secondary"
          name="clear"
          onClick={(e) => removeAllCompletedTasks(e)}
        >
          Clear completed
        </FilterButton>
      </div>
    </FooterFilters>
  );
}

export default Filters;
