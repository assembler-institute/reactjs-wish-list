import React from "react"

export default class Toast extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div data-testid="create-todo-error-message" className="position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Error</strong>
          </div>
          <div className="toast-body">
            Please enter at least one character.
          </div>
        </div>
      </div>
    )
  }
}