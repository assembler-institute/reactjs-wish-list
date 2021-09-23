/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaLaughBeam } from "react-icons/fa";
import styles from "./CheckButton.module.scss";

export default function CheckButton({ item, toDoItem, setToDoItem }) {
    const checkHandler = () => {
        // eslint-disable-next-line
        console.log(item);
        setToDoItem(
            toDoItem.map((element) => {
                if (element.id === item.id) {
                    return {
                        ...element,
                        done: !element.done,
                    };
                }
                return element;
            }),
        );
    };
    return (
        <button
        type="button"
        className={styles.checkButton}
        >
        <FaLaughBeam onClick={checkHandler} />
        </button>
    );
}