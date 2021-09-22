import React from "react";


export default class NoTodoPreview extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="No-todo-preview">
              <img src="src/img/undraw_wandering_mind_0mkm.svg"></img>
              <p>Nothing to do yet. Come on, don't be lazy!</p>
            </div>
        )
    }

}

