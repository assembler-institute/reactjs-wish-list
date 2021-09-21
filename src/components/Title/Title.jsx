import React from "react";
import styles from "./Title.module.scss";

function Title() {
  return (
    <header>
      <h1 className={styles.Title}>To Do</h1>
    </header>
  );
}

export { Title };
