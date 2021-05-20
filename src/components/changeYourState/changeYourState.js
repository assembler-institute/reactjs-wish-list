function App4() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">ey</div>
      </section>
    </main>
  );
}

/*

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
          <button onClick={this.clickToCheck}>&commat;</button>
          {this.props.currentValue.value}
          <button onclick={this.clickToDelete}>&times;</button>
        </div>
      </li>
    );
  }
}

*/

export default App4;
