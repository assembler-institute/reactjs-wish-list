import "./TodoCounter.scss"
import React from "react"
export default class TodoCounter extends React.Component{
    constructor(props){
        super(props)   
    }

    render(){
        return (
        <label className="todo-counter">
            {this.props.count} items left
        </label>
        )
    }
}
