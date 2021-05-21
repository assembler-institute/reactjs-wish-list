import React from "react";
import { Link } from "react-router-dom";

import { HOME, ACTIVE, COMPLETED } from "../../constatnts/routes";

function AppFooter({ todos }) {
  return (
    <section className="main__footer">
      <span>{todos.filter((v) => !v.complete).length} items left</span>
      <div className="main__footer__lwrp">
        <Link className="main__footer__link" to={HOME}>
          All
        </Link>
        <Link className="main__footer__link" to={ACTIVE}>
          Active
        </Link>
        <Link className="main__footer__link" to={COMPLETED}>
          Completed
        </Link>
      </div>
      <button className="main__footer__link" type="button">
        Clear completed
      </button>
    </section>
  );
}

export default AppFooter;
