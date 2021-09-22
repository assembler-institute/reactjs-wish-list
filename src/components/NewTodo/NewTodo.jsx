import React from "react"
import "./NewTodo.scss"

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.getElementById('inputNewToDo').addEventListener('keyup', event => {
      let task
      if (event.key === 'Enter') {
        task = event.target.value
        let newToDo = {
          id: 1,
          task: task,
          completed: false
        }



        event.target.value = null
      }


    })
  }

  render() {
    return (
      <input id="inputNewToDo" type="text" className="w-100 mt-4 new-todo shadow"></input>
    )
  }
}