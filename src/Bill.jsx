// IMPORTING REACT AND CSS;
import React from "react";
import styles from './Bill.module.css';

// IMPORTING ROUTER HOOKS;
import { Link } from "react-router-dom";

// BILL COMPONENT
export default function Bill({ des, order }) {
    return (
        <div className={styles.bill}>
            <h3>PRICE DETAIILS (ITEMS)</h3>
            <div className={styles.upper}>
                <div className={styles.total}>
                    <span>Total MRP (Inc. of Taxes)</span>
                    <span> ₹1098</span>
                </div>
                <div className={styles.discount}>
                    <span>Beyoung Discount</span>
                    <span> - ₹420</span>
                </div>
                <div className={styles.shipping}>
                    <span>Shipping</span>
                    <span> ₹49 Free</span>
                </div>
                <div className={styles.cart}>
                    <span>Cart Total</span>
                    <span> ₹678</span>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.finalprice}>
                    <strong>Total Amount</strong>
                    <strong>5000</strong>
                </div>
                <Link style={{ textDecoration: 'none' }} to={des === 'ship' ? '/checkout/shipping' : '/checkout/shipping'}>
                    <button className={styles.chekout} onClick={order}>CHECKOUT SECURELY</button>
                </Link>
            </div>
        </div>
    )
}