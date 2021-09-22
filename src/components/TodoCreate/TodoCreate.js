import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";

import "./TodoCreate.scss";

export default class TodoCreate extends Component {
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
            <form onSubmit={handleSubmit}>
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
                invalid={errors.text}
                placeholder="Add a new todo..."
              />
            </form>
          )}
        </Formik>
      </section>
    );
  }
}
