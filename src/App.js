import React from "react";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">ey</div>
      </section>
    </main>
  );
}

const toDoElements = [];

class toDoList extends React.Component {
  render() {
    const elements = this.props.elements.map((currentValue, index) => {
      return (
        <toDoListElements
          element={currentValue}
          removeElement={this.props.removeElement}
          clickToCheck={this.props.clickToCheck}
        />
      );
    });

    return <ul>{elements}</ul>;
  }
}

class toDoListElements extends React.Component {
  constructor(props) {
    super(props);
    this.clickToDelete = this.clickToDelete.bind(this);
    this.clickToCheck = this.clickToCheck.bind(this);
  }

  clickToDelete() {
    const index = parseInt(this.props.index);
    this.props.removeElement(index);
  }

  clickToCheck() {
    const index = parseInt(this.props.index);
    this.props.clickToCheck(index);
  }

  render() {
    return (
      <li>
        <div>
          <span onClick={this.clickToCheck}>&commat;</span>
          {this.props.currentValue.value}
          <button onclick={this.clickToDelete}>&times;</button>
        </div>
      </li>
    );
  }
}

class toDoTitle extends React.Component {
  render() {
    return <h1 className="col col-md-12 col-12">TODO</h1>;
  }
}
class toDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.newItem.focus();
  }

  onSubmit(event) {
    event.preventDefault();
    const newItem = this.newItem.value;

    if (newItem) {
      this.props.addElement({ newItem });
      this.newItem.form.reset();
    }
  }

  render() {
    return (
      <form className="col col-md-12 col-12" onsubmit={this.onSubmit}>
        <input type="text" placeholder="Añade un nuevo to do..." />
        <button type="submit">Añadir</button>
      </form>
    );
  }
}

class toDoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  addElement(toDoElement) {
    toDoElements.unshift({
      value: toDoElement.newItem,
      index: toDoElements.length + 1,
    });

    this.setState({ toDoElements: toDoElements });
  }

  removeElement(toDoElementRemove) {
    toDoElements.splice(toDoElementRemove, 1);
    this.setState({ toDoElements: toDoElements });
    this;
  }

  render() {
    return (
      <div>
        <toDoTitle />
        <toDoList />
        <toDoForm addElement={this.addElement} />
      </div>
    );
  }
}



export default App;
