import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

import "./TodoCreateForm.scss";

export default class TodoCreateForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleAddTodo } = this.props;

    return (
      <section className="todo-create">
        <Formik
          initialValues={{ text: this.props.text }}
          validationSchema={todoSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);

            setTimeout(() => {
              handleAddTodo(values);
              actions.resetForm();
            }, 500);
          }}
        >
          {({ handleChange, handleSubmit, validateField, resetForm, errors, values, touched, isValidating, isValid }) => (
            <form className="todo-create__form" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="text"
                id="text"
                handleChange={(event) => {
                  handleChange(event);
                  validateField();
                }}
                handleBlur={() => {
                  resetForm();
                }}
                value={values.text}
                wrong={Boolean(errors.text)}
                placeholder="Add a new todo..."
                setAutoFocus={true}
                data-testid="create-todo-input"
              />
              {errors.text && <ErrorMessage dataTestId="create-todo-error-message">{errors.text}</ErrorMessage>}
            </form>
          )}
        </Formik>
      </section>
    );
  }
}
