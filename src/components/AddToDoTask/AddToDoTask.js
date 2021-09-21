/* eslint-disable prettier/prettier */
import React from 'react'

// Improve the render of the component

export default class AddToDoTask extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: 'Default',
      isEditing: false
    }
  }

  componentDidUpdate() {
    const { defaultValues } = this.props
    const {text , id} = defaultValues
    const {title} = this.state

    if (id !== '' && text !== title) {
      this.updateState({id, text, isEditing: true})
    }
  }

  formSubmit = (event) => {
    event.preventDefault()
    
    const {handlerToDoTask} = this.props
    handlerToDoTask(this.state)

    this.updateState({})
  }

  updateState = ({id = '', text = '', isEditing = false}) => {
    this.setState({id: id, title: text, isEditing: isEditing})
  }

  handlerInput = (event) => {
    const text = event.target.value
    const {id} = this.state
    console.log(text)
    this.updateState({id, text})
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