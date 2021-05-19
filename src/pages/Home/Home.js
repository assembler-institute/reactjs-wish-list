import React from "react";

// import layout
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <main>
        <section>
          <div className="upper_home">
            <div className="central_home">
              <Header />
              <Main />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
