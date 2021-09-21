import React, {Component} from "react";

class Button extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {value} = this.props

        return (
            <button type="button" class="btn">{value}</button>
        )
    }
}

export default Button