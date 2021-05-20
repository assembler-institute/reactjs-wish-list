function App2() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">ey</div>
      </section>
    </main>
  );
}

/*

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

  */

export default App2;
