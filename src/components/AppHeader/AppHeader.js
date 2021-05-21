import React from "react";
import { Formik } from "formik";

import Checkbox from "../Checkbox";
import Input from "../Input";

import productSchema from "./todo-schema";

import hero from "../../img/hero.jpg";
import "./AppHeader.scss";

function Appheader({ handleAddTodo }) {
  return (
    <header>
      <div className="heroImg" alt="hero" src={hero}>
        <h1 className="TODO__Header">TODO</h1>

        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={productSchema}
          validateOnBlur={false}
          onSubmit={(values, { resetForm }) => {
            handleAddTodo(values);
            resetForm();
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
            <form className="TODO__Form" onSubmit={handleSubmit}>
              <Checkbox handleChange={() => {}} />
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
      </div>
    </header>
  );
}

export default Appheader;
