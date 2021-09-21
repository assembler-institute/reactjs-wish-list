import React from "react";

export default function TodoFilter() {}

class TodoFilter extends React.Component{
    constructor(props){
        super(props)
    }
    filterAll(){

    }

    filterActive(){

    }

    filterCompleted(){

    }

    render(){
        return (
        <div>
            <ul>
                <li className="todo-filter">All</li>
                <li className="todo-filter">Active</li>
                <li className="todo-filter">Completed</li>
            </ul>
        </div>
        )
    }
}
