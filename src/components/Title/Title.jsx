import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Title.module.scss";

function Title() {
  return (
    <header>
      <div className={styles.Header}>
        <h1 className={styles.Title}>T O D O</h1>
        <DarkMode />
      </div>
    </header>
  );
}

export { Title };
