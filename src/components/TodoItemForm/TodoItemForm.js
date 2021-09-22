import { Component } from "react";
import { Formik } from "formik";
import Input from "../Input";

export default class TodoItemForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, handleSetText, handleDisableForm } = this.props;

    return (
      <Formik
        initialValues={{
          text,
        }}
        onSubmit={(values) => {
          setTimeout(() => {
            handleSetText(values.text);
            handleDisableForm();
          }, 500);
        }}
      >
        {({ handleChange, handleSubmit, errors, values, touched, isValidating, isValid }) => (
          <form onSubmit={handleSubmit} className="width-100">
            <Input
              type="text"
              name="text"
              id="text"
              handleChange={handleChange}
              handleBlur={handleDisableForm}
              value={values.text}
              invalid={errors.text}
              placeholder="Set a name..."
              autoFocus
            />
          </form>
        )}
      </Formik>
    );
  }
}
