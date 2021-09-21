import { Component } from "react";

export default class TodoItem extends Component {
  construct(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSetText(event) {
    this.props.handleSetText(this.props.id, event.target.value);
  }

  handleSetDone(event) {
    this.props.handleSetDone(this.props.id, event.target.checked);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    <>
      <article>
        <CheckBox handleSetDone={this.handleSetDone} />
        <Formik>
          <TodoInput handleSetText={this.handleSetText} />
        </Formik>
        <DeleteButton handleSetDone={this.handleSetDone} />
      </article>
      {/*<Button onClick={handleDelete}></Button>*/}
      {/*<Button onClick={() => this.props.handleDelete(this.props.id)}></Button>*/}
    </>;
  }
}
