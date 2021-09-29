import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";

import { FormAddTodoStyled, Form } from "./FormAddTodo.styled";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

export default class FormAddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleAddTodo } = this.props;

    return (
      <FormAddTodoStyled>
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
          {({ handleChange, handleSubmit, validateField, resetForm, errors, values }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="text"
                id="text"
                onChange={(event) => {
                  handleChange(event);
                  validateField();
                }}
                onBlur={() => {
                  resetForm();
                }}
                value={values.text}
                isWrong={Boolean(errors.text)}
                placeholder="Add a new todo..."
                setAutoFocus={true}
                data-testid="create-todo-input"
              />
              {errors.text && <ErrorMessage dataTestId="create-todo-error-message">{errors.text}</ErrorMessage>}
            </Form>
          )}
        </Formik>
      </FormAddTodoStyled>
    );
  }
}
