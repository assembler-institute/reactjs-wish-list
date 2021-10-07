import { Component } from "react";
import { Formik } from "formik";
import { todoSchema } from "../../schema";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

import { FormUpdateTodoStyled, Form } from "./FormUpdateTodo.styled";

export default class FormUpdateTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, handleSetText, handleCloseForm } = this.props;

    return (
      <FormUpdateTodoStyled>
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
          {({ handleChange, handleSubmit, validateField, resetForm, errors, values }) => (
            <Form onSubmit={handleSubmit} className="todo-set-text__form">
              <Input
                type="text"
                name="text"
                id="text"
                onChange={(event) => {
                  handleChange(event);
                  validateField();
                }}
                onBlur={() => {
                  handleCloseForm();
                  resetForm();
                }}
                value={values.text}
                isWrong={Boolean(errors.text)}
                placeholder="Set a name..."
                setAutoFocus={true}
                data-testid="todo-item-input"
              />
              {errors.text && <ErrorMessage>{errors.text}</ErrorMessage>}
            </Form>
          )}
        </Formik>
      </FormUpdateTodoStyled>
    );
  }
}
