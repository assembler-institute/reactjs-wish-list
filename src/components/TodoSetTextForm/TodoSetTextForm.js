import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";

import "./TodoSetTextForm.scss";

export default class TodoSetTextForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, handleSetText, handleCloseForm } = this.props;

    return (
      <div className="todo-set-text">
        <Formik
          initialValues={{
            text,
          }}
          validationSchema={todoSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSetText(values.text);
              handleCloseForm();
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
                  handleCloseForm();
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
