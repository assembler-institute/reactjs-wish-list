import { Component } from "react";
import image from "../../img/moon-svgrepo-com.svg";
import "./Switch.scss";

export default class Switch extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <img className="dark-mode-img" src={image} onClick= "toggleDarkMode" />
        )
    }
}