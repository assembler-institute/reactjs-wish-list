/* eslint-disable prettier/prettier */
import React from 'react'
// Improve the render of the component
import TodoTask from '../TodoTask/TodoTask'

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
        <h1 data-testid="no-todos">There is any to do yet <span role="img" aria-label="sad face">😥</span></h1> :
        <div className="todo-list">
         {
         tasks.map(task => (
           
            <TodoTask key={task.id} id={task.id} inputValue={task.inputValue} />
          ))
         }
        </div> 
      }
      </>
    )
  }
}