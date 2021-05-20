function App3() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">ey</div>
      </section>
    </main>
  );
}
/*
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
          <toDoListElements />
          <toDoForm addElement={this.addElement} />
        </div>
      );
    }
  }
  */

export default App3;
