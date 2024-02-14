// IMPORTING REACT AND STYLES 
import React from "react";
import styles from './HeadingStrip.module.css';

// HEADING STRIP COMPONENT
export default function HeadingStrip({ heading }) {
    return (
        <div className={styles.heading}>
            <p>{heading}</p>
        </div>
    )
}