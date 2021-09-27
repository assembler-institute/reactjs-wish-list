import { Component } from "react";
import "./Header.scss";
import image from "../../img/moon-svgrepo-com.svg";
import Switch from "../Switch";

export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="top">
            <h1 className="app-title">TODO</h1>
            <Switch />
            </header>
            
        )
    }
}