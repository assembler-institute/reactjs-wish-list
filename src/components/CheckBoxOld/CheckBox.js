import { Component } from "react";
import "./CheckBox.scss";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  handleCheck = (event) => {
    //this.props.handleCheck(this.props.id, event.target.checked);
  };

  handleMouse = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      isHovered: !prevState.isHovered,
    }));
  };

  render() {
    const { id = "dummy", checked = false } = this.props;

    const checkStyle = "";
    const labelStyle = "";

    return (
      <div
        className="checkbox"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          className="checkbox__input"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={this.handleCheck}
        />
        <label
          className={
            checked
              ? "checkbox__label"
              : "checkbox__label checkbox__label--checked"
          }
          htmlFor={id}
        >
          <span
            className={
              checked
                ? "checkbox__checkmark"
                : "checkbox__checkmark checkbox__checkmark--checked"
            }
          >{`\u2713`}</span>
        </label>
      </div>
    );
  }
}
