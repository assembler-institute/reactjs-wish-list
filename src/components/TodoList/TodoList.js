/* eslint-disable prettier/prettier */
import React from 'react'
// Improve the render of the component

export default class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  editHandler = (event) => {
    const taskId = event.target.id
    const text = event.target.innerText

    // Make text editable
    const {editTaskText} = this.props
    editTaskText(text, taskId)

  }

  render() {
    const {tasks} = this.props
    return (
      <>
      {
        tasks.length === 0 ? 
        <h1>No hay todos</h1> :
        tasks.map(task => (
          <button type="button" key={task.id} id={task.id} onClick={this.editHandler}>{task.text}</button>
        )) 
      }
      </>
    )
  }
  
}