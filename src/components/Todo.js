import React from 'react'

function Todo({text}) {
  return (
    <div className="todo">
        <li className="todo-item">{text}</li>
        <button type="button" className="complete-btn">
            <i className="fas fa-check" />
        </button>
        <button  type="button" className="trash-btn">
            <i className="fas fa-trash" />
        </button>
    </div>
  )
}

export default Todo