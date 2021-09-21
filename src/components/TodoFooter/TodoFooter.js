import { Component } from "react"

class TodoFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <footer className="card-footer text-muted d-flex justify-content-between align-items-center">
        <span className="text-tag">5 items left</span>
        <div className="d-flex">
          <span className="text-tag">All</span>
          <span className="text-tag px-2">Active</span>
          <span className="text-tag">Completed</span>
        </div>
        <span className="text-tag">Clear Completed</span>
      </footer>
    )
  }
}

export default TodoFooter