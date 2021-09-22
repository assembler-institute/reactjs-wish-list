import React from "react";
import TodoCounter from "../TodoCounter/TodoCounter";



export default class Footer extends React.Component{
        constructor(props){
        super(props)

         }
        render (){
            return(
            <TodoCounter count={this.props.count} >
            <button onClick="clearCompleteTodos"></button>
            </TodoCounter>
        )
    }
    
}