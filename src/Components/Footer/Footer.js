import React, { Component } from "react";

import Button from '../Button'
import Counter from "../Counter"

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">
                <Counter />
                <div className="btn__group">
                    <Button 
                        value="All"
                    />
                    <Button 
                        value="Active"
                    />
                    <Button 
                        value="Completed"
                    />
                </div>
                <Button 
                    value="Delete All"
                />
            </div>
        )
    }
}

export default Footer;

