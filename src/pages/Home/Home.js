import React from "react";

// import layout
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <main className="container mt-5">
        <section className="row">
          <div className="col col-12">
            <Header />
            <Main />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
