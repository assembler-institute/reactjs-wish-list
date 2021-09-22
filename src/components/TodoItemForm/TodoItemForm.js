import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";

export default class TodoItemForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, handleSetText, handleDisableForm } = this.props;

    return (
      <div className="width-100">
        <Formik
          initialValues={{
            text,
          }}
          validationSchema={todoSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSetText(values.text);
              handleDisableForm();
              actions.resetForm();
            }, 500);
          }}
        >
          {({ handleChange, handleSubmit, validateField, resetForm, errors, values, touched, isValidating, isValid }) => (
            <form onSubmit={handleSubmit} className="width-100">
              <Input
                type="text"
                name="text"
                id="text"
                handleChange={(event) => {
                  handleChange(event);
                  validateField();
                }}
                handleBlur={() => {
                  handleDisableForm();
                  resetForm();
                }}
                value={values.text}
                invalid={errors.text}
                placeholder="Set a name..."
                autoFocus
              />
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
