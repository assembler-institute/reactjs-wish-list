import React, { Component } from "react";
import "./TodoList.scss";



class TodoListCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
                listToDo:[],
                }
            }
    render(){
        const {listToDo} = this.state;
        return (
            <div className="todo__list__container container-lg">
                <ul id="completed">
                {/* {listToDo.map((el)=> {
                    console.log(el) */}
                    {/*                     if(el.id===id){
                    <li key={el.id}>
                        <input type="checkbox" id={el.id}  value={el.value}/>
                        <span for={el.value}> {el.value}</span>
                    </li>
                } */}
              {/*   }
                )} */}
                </ul>
            </div>
        )
    }
}

export default TodoListCompleted;