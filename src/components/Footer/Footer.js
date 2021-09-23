import styled from "styled-components";

const Filters = styled.button`
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

function Footer({ filteredTasks, filterTasks, removeAllCompletedTasks }) {
  return (
    <FooterFilters>
      <div className="d-flex justify-content-between pt-3">
        <p>{filteredTasks.length} items</p>
        <div>
          <Filters
            className="btn btn-secondary"
            name="all"
            onClick={(e) => filterTasks(e.target.name)}
          >
            All
          </Filters>
          <Filters
            className="btn btn-secondary"
            name="active"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Active
          </Filters>
          <Filters
            className="btn btn-secondary"
            name="complete"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Complete
          </Filters>
        </div>
        <Filters
          className="btn btn-secondary"
          name="clear"
          onClick={(e) => removeAllCompletedTasks(e)}
        >
          Clear completed
        </Filters>
      </div>
    </FooterFilters>
  );
}

export default Footer;
