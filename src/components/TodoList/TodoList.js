/* eslint-disable prettier/prettier */
import React from 'react'

// Improve the render of the component

export default class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {tasks} = this.props
    return (
      <>
      {
        tasks.length === 0 ? 
        <h1>No hay todos</h1> :
        tasks.map(task => (
          <h1 key={task.id}>{task.text}</h1>
        )) 
      }
      </>
    )
  }
  
}