import React, { Component } from "react";
import "./TodoList.scss";

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: props.value || "",
            done:false
                }
        this.updateInput = this.updateInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    updateInput(keycode,value) {
        this.setState({ 
            [keycode]: value,
        });
    }

    handleChange() {
        if (this.state.isEditing) {
            this.props.handleEdit(this.props.id, this.state.value);
        }
        this.setState({
            isEditing: !this.state.isEditing,
            
        });
    }
    handleCheckbox(){
        this.setState({
            done:!this.state.done
        })
    }
    render() {
        const { id, done, handleRemove, handleEdit} = this.props;
        const { isEditing, value } = this.state;

        return (
            <>
            <div className="input__check__container">
            <div className="round">
                <input className="input__checkbox" id={"box" + id} type="checkbox"  
                    checked={done}
                    onChange={e => this.handleCheckbox(done)}
                />
                <label htmlFor={"box" + id}></label>
            </div> 
            {isEditing ? (<div className="input__todo__container">
                <input type="text"
                    className="input__text"
                    id={id} 
                    value={value}
                    onChange={e => this.updateInput("value",e.target.value) 
                    }
                />
                <button type="button" className="btn btn__confirm" onClick={() => this.handleChange(id, value,done)}>Confirm</button>
                </div>):<p className="title" onClick={() => this.handleChange(id, value,done)}>{value}</p> }
            </div>
                <button className="btn btn__remove" type="button" onClick={() => handleRemove()}>Remove</button>
            </>
        );
    }
}

class TodoList extends Component {

    render(){
        
        return (
            <div className="todo__list__container container-lg">
            <ul>
            {this.props.items.map((el)=> 
                    <li key={el.id} id={el.id}>
                    <TodoListItem 
                        id={el.id} 
                        value={el.value}
                        handleRemove={() => this.props.handleRemove(el.id)}
                        handleEdit={(id, value) => this.props.handelEdit(id,value)}
                    />
                   </li>
                )
                }
                    
              </ul>
            </div>
        )
    }
}

export default TodoList;