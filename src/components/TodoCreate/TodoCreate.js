import { Component } from "react";

export default class TodoCreate extends Component {
  construct(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //;
  }

  render() {
    <>
      <CheckBox handleSetDone={this.handleSetDone} />
      <Formik>
        <TodoInput handleSetText={this.handleSetText} />
      </Formik>
      <DeleteButton handleSetDone={this.handleSetDone} />
    </>;
  }
}
