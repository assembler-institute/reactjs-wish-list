import React from "react";
import styles from "./Title.module.scss";

function Title() {
  return (
    <header>
      <h1 className={styles.Title}>T O D O</h1>
    </header>
  );
}

export { Title };
