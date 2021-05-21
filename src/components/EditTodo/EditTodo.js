import React from "react";
import { Formik } from "formik";
import Input from "../Input";
import editSchema from "./edit-schema";

function EditTodo({ handleEditSubmit, todo }) {
  return (
    <Formik
      initialValues={{
        name: "",
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
            handleBlur={handleBlur}
            hasErrorMessage={touched.name}
            errorMessage={errors.name}
          />
        </form>
      )}
    </Formik>
  );
}

export default EditTodo;
