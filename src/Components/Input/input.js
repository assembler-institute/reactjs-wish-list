import React, { Component } from "react";
import "./input.scss";


class Input extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount() {
        //meterlo dentro del local storage
    }


    render(){
        return(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                aria-label="Username" 
                ></input>
            </div>
        )
    }
}

export default Input