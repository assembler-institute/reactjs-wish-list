/* eslint-disable prettier/prettier */
import React from 'react'
import { deleteItem, saveItem } from '../../utils/localStorage'

import "./TodoTask.scss"

export default class TodoTask extends React.Component {

  constructor(props) {
    super(props)

    const {id, inputValue} = this.props

    this.state = {
      id: id,
      done: false,
      isEditing: false,
      inputValue: inputValue
    }
  }

  /* 
  componentWillUnmount() {
    const {callBackFromParent} = this.prop 
    callBackFromParent(this.state)
  }
  */

  completeHandler = () => {
    const {done} = this.state
    !done ? this.setState({done: true}) : this.setState({done: false})
  }

  deleteHanlder = () => {
    const {id} = this.state
    deleteItem(id)
    this.setState({id: ''})
  }

  handlerSubmit = (event) => {
    event.preventDefault()
    saveItem({...this.state, isEditing: false})
    this.setState({isEditing: false})
  }

  editHandler = (event) => {
    this.setState({inputValue: event.target.value})
  }

  render() {

    const {inputValue, id, isEditing, done} = this.state

    if (id === '') return null

    return(
      <div className={`todo-task ${isEditing ? 'editing' : ''} ${done ? 'done' : ''}`}>
          <button className="complete-task" type="button" onClick={this.completeHandler}>
            <span role="img" aria-label='Check to complete'>
              {done ? "❌" : "✅"}
            </span>
          </button>
          <form onSubmit={this.handlerSubmit}>
            <input required className="input-task" type="text" key={id} id={id} value={inputValue} 
            onChange={this.editHandler} 
            onFocus={() => this.setState({isEditing: true})} 
            onBlur={() => this.setState({isEditing: false})} 
            />
          </form>
          <button className="delete-task" type="button" onClick={this.deleteHanlder}>Delete</button>
      </div>
      
    )
  }
}