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
    
    updateInput(key, value) {
        this.setState({ [key]: value });
    } 
    render(){
        return(<>
            <div className="input-group mb-3">
                        <input 
                        type="text" 
                        placeholder="Insert any activity... " 
                        aria-label="Insert any activity..." 
                        value={this.state.newToDo}
                        onChange={e => this.updateInput("newToDo", e.target.value)}
                        />
                    <div>
                        <button onClick={() => this.props.handelSubmit(this.state.newToDo)}
                        disabled={!this.state.newToDo.length}
                        >prueba</button>
                    </div>
                    </div>
                    
            </>
        )
    }
}

export default Input