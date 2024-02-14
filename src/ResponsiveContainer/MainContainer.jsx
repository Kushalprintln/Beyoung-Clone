// IMPORTING REACT AND CSS;
import React from "react";
import styles from './MainContainer.module.css';

// MAINCONTAINER COMPONENT ONLY RETURNING THE CHILDREN FOR RESPONSIVENSSS;
export default function MainContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}