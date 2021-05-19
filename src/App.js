import React from "react";
import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

import * as api from "./api";

const LOCAL_STORAGE_KEY = "react-tasks-state";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return null;
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isLoading: false,
      hasError: false,
      loadingError: null,
      // newProductFormOpen: false,
    };

    // this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleDownVote = this.handleDownVote.bind(this);
    // this.handleUpVote = this.handleUpVote.bind(this);
    // this.handleSetFavorite = this.handleSetFavorite.bind(this);
    // this.saveNewProduct = this.saveNewProduct.bind(this);
    // this.toggleNewProductForm = this.toggleNewProductForm.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        isLoading: true,
      });

      api.getTasks().then((data) => {
        this.setState({
          tasks: data,
          isLoading: false,
        });
      });
      return;
    }

    this.setState({
      tasks: prevItems.tasks,
    });
  }

  componentDidUpdate() {
    const { tasks } = this.state;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tasks }));
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <Home
              {...routeProps}
              // cartItems={cartItems}
              // products={products}
              // isLoading={isLoading}
              // hasError={hasError}
              // loadingError={loadingError}
              // handleDownVote={this.handleDownVote}
              // handleUpVote={this.handleUpVote}
              // handleSetFavorite={this.handleSetFavorite}
              // handleAddToCart={this.handleAddToCart}
              // handleRemove={this.handleRemove}
              // handleChange={this.handleChange}
            />
          )}
        />
        {/* <Route
          path="/new-product"
          exact
          render={(routeProps) => (
            <NewProduct {...routeProps} saveNewProduct={this.saveNewProduct} />
          )}
        /> */}
      </BrowserRouter>
      // <main className="container mt-5">
      //   <section className="row">
      //     <div className="col col-12">
      //       <h1>Hola mundo</h1>
      //     </div>
      //   </section>
      // </main>
    );
  }
}

export default App;
