import React from "react";
import { Formik } from "formik";
import classNames from "classnames";

import Checkbox from "../Checkbox";
import Input from "../Input";
import ThemeToggle from "../ThemeToggle";

import productSchema from "./todo-schema";

import hero from "../../img/hero.jpg";
import "./AppHeader.scss";

function Appheader({ handleAddTodo, handleThemeClick, currentTheme }) {
  const headerClasses = classNames({
    TODO__Header: true,
    TODO__Header__DarkMode: currentTheme,
  });

  const formClasses = classNames({
    TODO__Form: true,
    TODO__Form__DarkMode: currentTheme,
  });

  const heroClasses = classNames({
    heroImg: true,
    heroImg__darkMode: currentTheme,
  });

  return (
    <header>
      <div className={heroClasses} alt="hero" src={hero}>
        <div className="themeSwitcherWrap">
          <h1 className={headerClasses}>TODO</h1>
          <ThemeToggle
            handleThemeClick={handleThemeClick}
            currentTheme={currentTheme}
          />
        </div>
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
            <form className={formClasses} onSubmit={handleSubmit}>
              <Checkbox handleChange={() => {}} />
              <Input
                // className={inputClasses}
                type="text"
                placeholder="Create task"
                id="name"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.name}
                errorMessage={errors.name}
                currentTheme={currentTheme}
              />
            </form>
          )}
        </Formik>
      </div>
    </header>
  );
}

export default Appheader;
