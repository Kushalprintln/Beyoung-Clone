// IMPORTING REACT AND CSS;
import React from "react";
import styles from './Address.module.css'

// IMPORTING OTHER COMPONENTS;
import AddressSection from "./AddressSection";

// ADDRESS COMPONENT
export default function Address() {
    return (
        <div className={styles.address}>
            <h3>+Add New Address</h3>
            <AddressSection />
            <AddressSection />
        </div>
    )
}