import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import  './Footer.scss'

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
                    <NavLink to="/">
                    <Button 
                        value="All"
                    />
                    </NavLink>
                    <NavLink to="/active" activeClassName="btn-secondary">
                    <Button 
                        value="Active"
                    />
                    </NavLink>
                    <NavLink to="completed" activeClassName="btn-secondary">
                    <Button 
                        value="Completed"
                    />
                    </NavLink>
                </div>
                <Button 
                    value="Delete All"
                />
            </div>
        )
    }
}

export default Footer;

