function Footer({ filteredTasks, filterTasks }) {
  return (
    <footer className="d-flex justify-content-between">
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
    </footer>
  );
}

export default Footer;