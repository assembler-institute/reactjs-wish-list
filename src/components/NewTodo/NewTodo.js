import React from "react";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

import "./NewTodo.scss";

import newTodoSchema from "./NewTodoSchema";

import NewTodoInput from "../NewTodoInput";

function addTodoDetails(todo) {
  return {
    id: uuid(),
    ...todo,
    isActive: false,
    isEdit: false,
    hashtagDisplayed: false,
    hashtag: "",
  };
}

export default function NewTodo({ saveNewTodo, editTodo, id, content }) {
  function onSave(values) {
    editTodo(id, values.target.value);
  }
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
      onSubmit={id ? onSave : onSubmit}
      onChange={id && onSave}
      onBlur={id && onSave}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
      }) => (
        <form
          onSubmit={handleSubmit}
          onChange={id && onSave}
          onBlur={id && onSave}
          className="new-todo-form"
        >
          <NewTodoInput
            id={id}
            type="text"
            className="input"
            value={id ? content : values.content}
            placeholder={id ? content : "Add new todo"}
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
