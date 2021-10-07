import { Component } from "react";
import { v4 as uuid } from "uuid";

import { InputStyled } from "./input.styled";

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
      onChange = () => {},
      onBlur = () => {},
      isWrong = false,
      setAutoFocus = false,
    } = this.props;

    return (
      <InputStyled
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={setAutoFocus}
        isWrong={isWrong}
      />
    );
  }
}
