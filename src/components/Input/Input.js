import React, { Component } from "react";
import { v4 as uuid } from "uuid";

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
      invalid,
      ...props
    } = this.props;

    return (
      <input
        className={invalid ? "input-field input-field--invalid" : "input-field"}
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    );
  }
}
