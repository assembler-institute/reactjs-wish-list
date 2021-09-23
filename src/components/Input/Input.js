import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./Input.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id = uuid(),
      name = "name",
      type = "text",
      value = "",
      placeholder = "",
      handleChange = () => {},
      handleBlur = () => {},
      wrong,
      className = "input",
      classNameWrong = "input--wrong",
    } = this.props;

    return (
      <input
        className={wrong ? `${className} ${classNameWrong}` : className}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  }
}
