/* eslint-disable prettier/prettier */
import React from 'react'
// Improve the render of the component
import TodoTask from "../TodoTask"

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
        <p className="text-center mt-3 h3" data-testid="no-todos">There is any to do yet <span role="img" aria-label="sad face">😥</span></p> :
        <ul className="list-group">
         {
         tasks.map(task => (
            <TodoTask key={task.id} task={task} {...this.props} />
          ))
         }
        </ul> 

      }
      </>
    )
  }
}