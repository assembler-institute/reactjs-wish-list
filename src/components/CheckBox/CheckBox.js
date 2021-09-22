import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./CheckBox.scss";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id = uuid(), name = "checkbox", handleChange = () => {}, checked, ...props } = this.props;

    return <input className="checkbox__input" id={id} name={name} type="checkbox" checked={checked} onChange={handleChange} {...props} />;
  }
}
