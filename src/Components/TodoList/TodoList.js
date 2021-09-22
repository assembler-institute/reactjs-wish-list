import React, { Component } from "react";
import "./TodoList.scss";



class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="todo__list__container container-lg">
              <ul>
              {this.props.items.map((el)=> 
                    <li key={el.id}>
                    <input type="checkbox" id={el.id}  value={el.value}/>
                    <span for={el.value}> {el.value}</span>
                    </li>
                    )
                        }
                    
              </ul>
            </div>
        )
    }
}

export default TodoList;