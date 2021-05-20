import React from "react";

function Home(
  {
    //   products,
    //   cartItems,
    //   isLoading,
    //   hasError,
    //   loadingError,
    //   handleDownVote,
    //   handleUpVote,
    //   handleSetFavorite,
    //   handleAddToCart,
    //   handleRemove,
    //   handleChange,
  },
) {
  return (
    <>
      {/* <AppHeader />
      <Main className="container-fluid">
        <div className="row">
          <div className="col col-8">
            <div className="row">
              <div className="col col-12">
                <header className="jumbotron">
                  <h1 className="display-4">Shoe shop</h1>
                  <p className="lead">
                    This is the best shoe shop ever, you will never find a
                    better one.
                  </p>
                  <p className="font-weight-bold">Buy now!</p>
                </header>
              </div>
              {isLoading && (
                <div className="col col-12">
                  <h2>Loading products...</h2>
                </div>
              )}
              {hasError && (
                <div className="col col-12">
                  <h2>Something went wrong...</h2>
                  <pre>
                    <code>{loadingError}</code>
                  </pre>
                </div>
              )}
              {!isLoading && !hasError && (
                <div className="col col-12">
                  <ProductsListing
                    products={products}
                    handleDownVote={handleDownVote}
                    handleUpVote={handleUpVote}
                    handleSetFavorite={handleSetFavorite}
                    handleAddToCart={handleAddToCart}
                  />
                </div>
              )}
            </div>
          </div>

          <Cart
            className="col col-4"
            cartItems={cartItems}
            handleRemove={handleRemove}
            handleChange={handleChange}
          />
        </div>
      </Main>
      <Footer /> */}
    </>
  );
}

export default Home;
