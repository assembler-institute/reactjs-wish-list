import React, { Component } from "react";
import "./TodoList.scss";



class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            listToDos: [],
            newToDo: ""
        };
    }
    render(){
        return (
            <div className="todo__list__container container-lg">
              <ul>
              {this.props.items.map((el)=> 
                    <li key={el.id}>
                    <input type="checkbox" id={el.id}  value={el.value}/>
                    <span htmlFor={el.value}> {el.value}</span>
                    <button type="button" onClick={() => this.props.handleRemove(el.id)}>Remove</button>
                    <button type="button" onClick={()=>this.props.handelEdit(el.id)}>Edit</button>
                    </li>
                    )
                        }
                    
              </ul>
            </div>
        )
    }
}

export default TodoList;