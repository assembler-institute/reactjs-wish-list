import { Component } from "react";
import { Formik } from "formik";
import "./TodoCreate.scss";

import Input from "../Input";

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
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);

            setTimeout(() => {
              handleAddTodo(values);
              actions.resetForm();
            }, 500);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values, touched, isValidating, isValid }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="text"
                id="text"
                handleChange={handleChange}
                handleBlur={handleBlur}
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
