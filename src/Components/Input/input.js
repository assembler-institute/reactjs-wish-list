import React, { Component } from "react";
import "./input.scss";


class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            newToDo: "",
        
            };
        this.updateInput = this.updateInput.bind(this);
    }
    
    updateInput(keycode,value) {
        this.setState({ 
            [keycode]: value,
        });
    }
    
    render(){
        
        return(<>
            <div className="input-group mb-3">
                        <input 
                            type="text" 
                            placeholder="Insert any activity... "
                            class="input__text" 
                            aria-label="Insert any activity..." 
                            value={this.state.newToDo}
                            onChange={e => this.updateInput("newToDo", e.target.value)}
                        />
                    <div>
                        <button 
                        type="submit"
                        class="btn"
                        onClick={() => this.props.handelSubmit(this.state.newToDo)}
                        disabled={!this.state.newToDo.length}
                        >Add</button>
                    </div>
                     
                </div>
            </>
        )
    }
}

export default Input