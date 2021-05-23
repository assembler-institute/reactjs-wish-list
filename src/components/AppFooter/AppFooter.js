import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { HOME, ACTIVE, COMPLETED } from "../../constatnts/routes";

function AppFooter({ todos, handleClearCompleted, currentTheme }) {
  function onHandleClearCompleted() {
    handleClearCompleted(todos);
  }
  const footerClearCompleteClasses = classNames({
    main__footer__link: true,
    main__footer__linkDarkMode: currentTheme,
  });
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
      <button
        className={footerClearCompleteClasses}
        type="button"
        onClick={onHandleClearCompleted}
      >
        Clear completed
      </button>
    </section>
  );
}

export default AppFooter;
