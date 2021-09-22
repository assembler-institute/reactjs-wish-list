function Footer({
  filteredTasks,
  filterTasks,
  removeAllCompletedTasks
}) {
  return (
    <footer>
      <div className="d-flex justify-content-between">
        <p>
           {filteredTasks.length} items 
        </p>
        <div>
          <button
            className="btn btn-secondary"
            name="all"
            onClick={(e) => filterTasks(e.target.name)}
          >
            All
          </button>
          <button
            className="btn btn-secondary"
            name="active"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Active
          </button>
          <button
            className="btn btn-secondary"
            name="complete"
            onClick={(e) => filterTasks(e.target.name)}
          >
            Complete
          </button>
        </div>
        <button
          className="btn btn-secondary"
          name="clear"
          onClick={(e) => removeAllCompletedTasks(e)}
        >
          Clear completed
        </button>

      </div>
      <p>Drag and drop to reorder list</p>

    </footer>
  );
}

export default Footer;