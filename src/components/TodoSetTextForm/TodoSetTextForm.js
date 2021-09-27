import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

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
            <form onSubmit={handleSubmit} className="todo-set-text__form">
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
                wrong={Boolean(errors.text)}
                placeholder="Set a name..."
                setAutoFocus={true}
                data-testid="todo-item-input"
              />
              {errors.text && <ErrorMessage>{errors.text}</ErrorMessage>}
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
