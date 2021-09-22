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
          onSubmit={(values) => {
            setTimeout(() => {
              handleAddTodo(values);
            }, 500);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values, touched, isValidating, isValid }) => (
            <form onSubmit={handleSubmit}>
              <Input type="text" name="text" id="text" handleChange={handleChange} handleBlur={handleBlur} value={values.text} invalid={touched.text} />
            </form>
          )}
        </Formik>
      </section>
    );
  }
}
