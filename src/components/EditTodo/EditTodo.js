/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Formik } from "formik";

import Input from "../Input";
import editSchema from "./edit-schema";

import "./EditTodo.scss";

function EditTodo({ handleEditSubmit, handleResetEdit, todo, currentTheme }) {
  return (
    <Formik
      initialValues={{
        name: todo.name,
      }}
      validationSchema={editSchema}
      onSubmit={(values) => {
        handleEditSubmit(values, todo.id);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
      }) => (
        <form className="Edit__Form" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Create task"
            id="name"
            value={values.name}
            handleChange={handleChange}
            handleBlur={(e) => {
              handleBlur(e);
              handleResetEdit();
            }}
            hasErrorMessage={touched.name}
            errorMessage={errors.name}
            autoFocus={true}
            currentTheme={currentTheme}
          />
        </form>
      )}
    </Formik>
  );
}

export default EditTodo;
