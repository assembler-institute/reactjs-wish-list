/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./RemoveButton.module.scss";

export default class RemoveButton extends React.Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return <button type="button" className={styles.removeButton}><FaTrashAlt /></button>;
  }
}
