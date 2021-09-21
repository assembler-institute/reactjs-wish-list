import React, { Component } from "react";

import Button from '../Button'

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="footer">
                <div class="row counter__container">
                    <span>1</span><p>Tasks Left</p>
                </div>
            <div class="btn__group">
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

