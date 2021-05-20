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
/*
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

class toDoTitle extends React.Component {
  render() {
    return <h1 className="col col-md-12 col-12">TODO</h1>;
  }
}

*/

export default App;
