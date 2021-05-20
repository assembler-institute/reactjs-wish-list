import React from "react";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

import newTodoSchema from "./NewTodoSchema";

import Input from "../Input";

function addTodoDetails(todo) {
  return {
    id: uuid(),
    ...todo,
    isActive: false,
  };
}

export default function NewTodo({ saveNewTodo }) {
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      await saveNewTodo(addTodoDetails(values));
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };
  return (
    <Formik
      initialValues={{
        content: "",
      }}
      validationSchema={newTodoSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="new-todo">
          <input type="checkbox" />
          <Input
            id="content"
            type="text"
            className="input"
            value={values.content}
            placeholder="Add new todo"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.title}
            errorMessage={errors.title}
          />
        </form>
      )}
    </Formik>
  );
}
