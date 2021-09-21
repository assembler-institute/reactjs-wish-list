/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditButton.module.scss";

export default class EditButton extends React.Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return <button type="button" className={styles.editButton}><FaEdit /></button>;
  }
}
