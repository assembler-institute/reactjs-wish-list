import { Component } from "react";
import "./CheckBox.scss";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  handleCheck = (event) => {
    //this.props.handleCheck(this.props.id, this.state.isChecked)

    this.setState((prevState) => ({
      ...prevState,
      isChecked: !prevState.isChecked,
    }));
  };

  componentDidUpdate() {
    console.log(this.state.isChecked);
  }

  render() {
    const { id = "dummy" } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={this.handleCheck}
        />
        <label
          className={
            isChecked
              ? "checkbox__label"
              : "checkbox__label checkbox__label--checked"
          }
          htmlFor={id}
        >
          <span
            className={
              isChecked
                ? "checkbox__checkmark"
                : "checkbox__checkmark checkbox__checkmark--checked"
            }
          >{`\u2713`}</span>
        </label>
      </div>
    );
  }
}
