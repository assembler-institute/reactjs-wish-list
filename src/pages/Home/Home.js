import React from "react";

// import layout
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Footer from "../../components/layout/Footer";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <main>
        <section className="row">
          <div className="upper_home">
            <div />
            <Header />
            <Main />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
