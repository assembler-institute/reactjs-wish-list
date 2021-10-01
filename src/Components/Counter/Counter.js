import React, {Component} from "react";

import './Counter.scss'

class Counter extends Component {
    
    render(){
        

        return (
            <div className="row counter__container">
                <span>1</span><p>Tasks Left</p>
            </div>
        )
    }
}

export default Counter