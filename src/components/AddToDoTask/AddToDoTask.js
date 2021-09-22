/* eslint-disable prettier/prettier */
import React from 'react'
import './AddToDoTask.scss'
// Improve the render of the component

export default class AddToDoTask extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'Do the homework...',
      error: false
    }
  }

  formSubmit = (event) => {
    event.preventDefault()

    const {error} = this.state
    if (!error) {
      // Send new task to parent
      const {handlerToDoTask} = this.props
      handlerToDoTask(this.state)
      this.updateState({})  
    }

  }

  handlerInput = (event) => {
    const text = event.target.value
    const error = text.length === 0

    this.updateState({text, error})
  }

  updateState = ({text = '', error}) => {
    this.setState({title: text, error: error})
  }

  render() {
    const { title, error } = this.state
    return (
      <>
      <form onSubmit={this.formSubmit}>
        <input data-testid="create-todo-input" type="text" value={title} onChange={this.handlerInput} />
      </form>
      <span data-testid="create-todo-error-message" className={error ? `show` : `hide`}>Please enter at least one character</span>
      </>
    )
  }
  
}