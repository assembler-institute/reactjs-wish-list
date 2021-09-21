import React from "react";

export default function Button() {}

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    clearCompleted(){

    }
    render(){
        return(
        <button className="btn">
            Clear Completed
        </button>
        )
    }

}