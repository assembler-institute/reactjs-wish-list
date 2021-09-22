import React, { Component } from "react";
import "./input.scss";


class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            newItem: "",
            list: []
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
    componentDidMount() {}
    componentDidUpdate(){}
    componentWillUnmount(){}
    
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    updateInput(key, value) {
        this.setState({ [key]: value });
      } 

        addItem() {
        const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
        list,
        newItem: ""
        });
    }
   
    

    render(){
        return(
            <div className="input-group mb-3">
            <form onSubmit={this.handleSubmit}/>
                    <span className="input-group-text" id="basic-addon1">@</span>
                        <input 
                        type="text" 
                        className="form-control" 
                        type="text"
                        placeholder="Username" 
                        aria-label="Username" 
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                        />
                    <button onClick={() => this.addItem()}
                    onClick={() => this.addItem()}
                    disabled={!this.state.newItem.length}>prueba</button>
                    
                      {/*   {this.state.list.map((el)=> <li key={el}>{el}</li>)} */}
                    <form/>
                    <div>
                    {this.state.list.map(item => {
                return (
                        <ul>
                        <li key={item.id}>
                        {item.value}</li>
                        </ul>)
                        }
                        )
                    }
                    </div>
            </div>
        )
    }
}

export default Input