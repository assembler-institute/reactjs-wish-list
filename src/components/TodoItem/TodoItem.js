import { Component } from "react";
import { Formik } from "formik";
import CheckBox from "../CheckBox";
import Button from "../Button";
import Input from "../Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEnableForm = this.handleEnableForm.bind(this);
  }

  handleSetText(text) {
    this.props.handleSetText(this.props.id, text);
  }

  handleSetDone(checked) {
    this.props.handleSetDone(this.props.id, checked);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  handleEnableForm() {
    this.props.handleEnableForm(this.props.id);
  }

  render() {
    const { text, enabledForm, handleDisableForm } = this.props;

    return (
      <>
        <article>
          <CheckBox handleChange={this.handleSetDone} />
          {enabledForm ? (
            <TodoItemForm handleSetText={this.handleSetText} handleDisableForm={handleDisableForm} text={text} />
          ) : (
            <Button handleClick={this.handleEnableForm}>{text}</Button>
          )}
          <Button handleClick={this.handleDelete}>{"\u00d7"}</Button>
        </article>
      </>
    );
  }
}

class TodoItemForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, handleSetText, handleDisableForm } = this.props;

    return (
      <Formik
        initialValues={{
          text,
        }}
        onSubmit={(values) => {
          setTimeout(() => {
            handleSetText(values.text);
            handleDisableForm();
          }, 500);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values, touched, isValidating, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Input type="text" name="text" id="text" handleChange={handleChange} handleBlur={handleBlur} value={values.text} invalid={touched.text} />
          </form>
        )}
      </Formik>
    );
  }
}
