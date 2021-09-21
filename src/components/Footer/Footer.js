function Footer({ filteredTasks }) {
  return (
    <footer className="d-flex justify-content-between">
      <p>
        {filteredTasks.length} items
      </p>
      <div>
        <button
          className="btn btn-secondary"
          name="all"
          onClick={(e) => this.filterTasks(e.target.name)}
        >
          All
        </button>
        <button
          className="btn btn-secondary"
          name="active"
          onClick={(e) => this.filterTasks(e.target.name)}
        >
          Active
        </button>
        <button
          className="btn btn-secondary"
          name="complete"
          onClick={(e) => this.filterTasks(e.target.name)}
        >
          Complete
        </button>
      </div>
    </footer>
  );
}

export default Footer;