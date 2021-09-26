import React, {Component} from "react";
import "./DeleteButton.scss";


class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <button type="button" className="cancel" onClick={this.props.onClick}/>
      </div>
      
    );
  }
}

export default DeleteButton;