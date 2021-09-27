/* eslint-disable prettier/prettier */
import React from 'react'
import { saveItem } from '../../utils/localStorage'

import "./TodoTask.scss"

export default class TodoTask extends React.Component {

  constructor(props) {
    super(props)

    const {task} = this.props

    this.state = {
      id: task.id,
      done: task.done,
      isEditing: task.isEditing,
      inputValue: task.inputValue
    }
  }

  completeHandler = () => {
    const {done} = this.state
    !done ? 
    ( saveItem({...this.state, done: true}) , this.setState({done: true}) ) 
    : 
    ( saveItem({...this.state, done: false}) , this.setState({done: false}) ) 
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
    const {handlerDeleteTask} = this.props

    if (id === '') return null

    return(
      <li className={`shadow-sm list-group-item d-flex flex-wrap justify-content-between align-items-center ${isEditing ? 'editing' : ''} ${done ? 'done' : ''}`}>
          <button className="btn btn-light" type="button" onClick={this.completeHandler}>
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
          <button className="btn btn-light" type="button" onClick={() => handlerDeleteTask(id)}><span role="img" aria-label="trash bin">🗑️</span></button>
      </li>
      
    )
  }
}