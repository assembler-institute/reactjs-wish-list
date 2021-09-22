/* eslint-disable prettier/prettier */
import React from 'react'

// Improve the render of the component

export default class AddToDoTask extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'Default'
    }
  }

  formSubmit = (event) => {
    event.preventDefault()
    
    const {handlerToDoTask} = this.props
    handlerToDoTask(this.state)

    this.updateState({})
  }

  updateState = ({text = ''}) => {
    this.setState({title: text})
  }

  handlerInput = (event) => {
    const text = event.target.value
    this.updateState({text})
  }

  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" value={title} onChange={this.handlerInput} />
      </form>
    )
  }
  
}