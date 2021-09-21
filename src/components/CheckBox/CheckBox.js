import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./CheckBox.scss";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  onChange(event) {
    this.props.handleChange(event.target.checked);
  }

  render() {
    const { id = uuid(), checked, disabled } = this.props;

    return <input className="checkbox__input" type="checkbox" id={id} checked={checked} disabled={disabled} onChange={this.onChange} />;
  }
}
