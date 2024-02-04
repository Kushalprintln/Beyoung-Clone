// IMPORTING REACT AND CSS
import React from "react";
import styles from './Checkout.module.css';

// IMPORTING ROUTER HOOKS
import { Outlet } from "react-router-dom";

// CHEKCOUT LAYOUT
export default function Checkout() {
    return (
        <div className={styles.checkout}>
            {/* <img src={nav} className={styles.nav} alt="" /> */}
            <Outlet />
            {/* <img src={footer} className={styles.foot} alt="" /> */}
        </div>
    )
}