// IMPORTING REACT AND CSS
import React from "react";
import styles from './SearchModal.module.css';

// SEARCH MODAL COMPONENT
export default function SearchModal() {
    return (
        <div className={styles.searchmodal}>
            <input type="text" className={styles.searchinput} placeholder="Search entire store here..." />
            <button className={styles.searchbtn}>Search</button>
        </div>
    )
}