import styled from "styled-components";

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

const FooterFilters = styled.footer`
  padding: 2rem;
  text-align:center;
`;

function TasksListFooter({ filteredTasks, removeAllCompletedTasks }) {
  return (
    <FooterFilters>
      &copy; All rights reserved
     {/*  <div className="d-flex justify-content-between pt-3">
     <p>{filteredTasks.length} items</p>
        <FilterButton
          name="clear"
          onClick={(e) => removeAllCompletedTasks(e)}
        >
          Clear completed
        </FilterButton> 
      </div> */}
    </FooterFilters>
  );
}

export default TasksListFooter;
