import React, { Component } from "react";
import "./input.scss";


class Input extends Component {
    render(){
        return(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
        )
    }
}

export default Input