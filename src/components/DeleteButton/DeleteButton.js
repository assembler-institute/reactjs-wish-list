import React, {Component} from "react";
import "./DeleteButton.scss";


class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="cancel" onClick={this.props.onClick}/>
    );
  }
}

export default DeleteButton;