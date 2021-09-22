import { Component } from "react";
import { Formik } from "formik";
import CheckBox from "../CheckBox";
import DeleteButton from "../DeleteButton";
import Input from "../Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSetText(event) {
    this.props.handleSetText(this.props.id, event.target.value);
  }

  handleSetDone(event) {
    this.props.handleSetDone(this.props.id, event.target.checked);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <>
        <article>
          <CheckBox handleChange={this.handleSetDone} />
          <Formik
            initialValues={{
              text: this.props.text,
              id: this.props.id,
            }}
            onSubmit={(values) => {
              setTimeout(() => {
                this.handleSetText(values.text);
              }, 500);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, values, touched, isValidating, isValid }) => (
              <form onSubmit={handleSubmit}>
                <Input type="text" name="text" id="text" handleChange={handleChange} handleBlur={handleBlur} value={values.text} invalid={touched.text} />
              </form>
            )}
          </Formik>
          <DeleteButton handleClick={this.handleSetDone} />
        </article>
      </>
    );
  }
}
