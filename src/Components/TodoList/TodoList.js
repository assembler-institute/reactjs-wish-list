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
            <input type="checkbox" 
                   checked={done}
                    onChange={e => this.handleCheckbox(done)}
                    
                /> 
            {isEditing ? (<div>
                <input type="text" 
                    id={id} 
                    value={value}
                    onChange={e => this.updateInput("value",e.target.value) 
                    }
                /> 
                </div>):<p>{value}</p> }
                <button className="btn__remove" type="button" onClick={() => handleRemove()}>Remove</button>
                <button type="button" onClick={() => this.handleChange(id, value,done)}>
                    {isEditing ? "Confirm": "Edit"}
                </button> 
                    
            </>
        );
    }
}

class TodoList extends Component {

    render(){
        
        return (
            <>
            <div className="todo__list__container container-lg">
            <ul>
            {this.props.items.map((el)=> 
                    <li key={el.id}>
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
              
        </>)
    }
}

export default TodoList;