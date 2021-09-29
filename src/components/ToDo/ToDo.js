import React, {Component} from "react";
import "./ToDo.scss";
import CompletedCheckBox from "../CompletedCheckBox/CompletedCheckBox";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ todoName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.todoName);
    this.setState({ todoName: "" });
  }

  render() {
    const { todoName } = this.state;
    
    return (
      <div className="input-group todo__create">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control bg-light todo__input" 
            type="text"
            placeholder="Add something..."
            onChange={this.handleChange}
            value={todoName}
            />
        </form>
        
      </div>
    );
  }
}

export default ToDo;