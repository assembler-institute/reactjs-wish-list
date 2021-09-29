import React, { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component{
  constructor(props) {
    super(props)
    this.state = {text:""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      completed: false,
    })
    this.setState({text:""})
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    const {text} = this.state;
    return(
      <form onSubmit={this.handleSubmit} className="card-body">
        <input className="input" type="text" placeholder="insert text here" value={text} name="text" onChange={this.handleChange}/>

      </form>
    )
  }
}

export default TodoForm