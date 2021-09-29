import React, {Component} from "react";
import "./CompletedCheckBox.scss";

class CompletedCheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <input className="todo__checkbox" type="checkbox" checked={this.props.isChecked} onChange={this.props.onChange}/>
    );
  }
}

export default CompletedCheckBox;