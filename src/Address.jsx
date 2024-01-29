import React from "react";
import styles from './Address.module.css'
import AddressSection from "./AddressSection";
export default function Address(){
    return (
        <div className={styles.address}>
            <h3>+Add New Address</h3>
            <AddressSection/>
            <AddressSection/>
        </div>
    )
}