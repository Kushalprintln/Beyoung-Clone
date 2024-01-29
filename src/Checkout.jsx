import React from "react";
import nav from '../images/CheckoutNav.png'
import footer from '../images/CheckoutFooter.png'
import styles from './Checkout.module.css';
import { Outlet } from "react-router-dom";
export default function Checkout(){
    return (
        <div className={styles.checkout}>
            <img src={nav} className={styles.nav} alt="" />
            <Outlet/>
            <img src={footer} className={styles.foot} alt="" />
        </div>
    )
}