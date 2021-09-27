import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/">
                    <Button 
                        value="All"
                    />
                    </Link>
                    <Link to="/active">
                    <Button 
                        value="Active"
                    />
                    </Link>
                    <Link to="completed">
                    <Button 
                        value="Completed"
                    />
                    </Link>
                </div>
                <Button 
                    value="Delete All"
                />
            </div>
        )
    }
}

export default Footer;

