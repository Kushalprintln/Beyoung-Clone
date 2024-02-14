// IMPORTING REACT AND CSS;
import React, { useContext } from "react";
import styles from './Bill.module.css';

// IMPORTING ROUTER HOOKS;
import { Link, useLocation } from "react-router-dom";

// IMPORTING CONTEXT;
import AuthContext from "../Contexts/AuthContext";

// BILL COMPONENT
export default function Bill({ execute }) {

    // INITILIZING AUTHENTICAION
    const Authentication = useContext(AuthContext);
    // console.log(Authentication.cart[0])

    const loc = useLocation();
    // console.log(loc.state)

    if (loc.state === null) {
        return (
            <div className={styles.bill}>
                <div className={styles.upper}>
                    <h3>PRICE DETAIILS ({Authentication.cart[0].items.length} ITEMS)</h3>
                    <hr />
                    <div className={styles.total}>
                        <span>Total MRP (Inc. of Taxes)</span>
                        <span>&#x20B9; {`${Authentication.cart[0].totalPrice}`}</span>
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
                        <span>&#x20B9; {`${Authentication.cart[0].totalPrice}`}</span>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.finalprice}>
                        <strong>Total Amount</strong>
                        <strong>&#x20B9; {`${Authentication.cart[0].totalPrice}`}</strong>
                    </div>
                    <p className={styles.yousave}>You Saved ₹420 on this order</p>
                    <button className={styles.chekout} onClick={execute}>CHECKOUT SECURELY</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.bill}>
                <div className={styles.upper}>
                    <h3>PRICE DETAIILS (Individual ITEMS)</h3>
                    <hr />
                    <div className={styles.total}>
                        <span>Total MRP (Inc. of Taxes)</span>
                        <span>&#x20B9; {`${loc.state}`}</span>
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
                        <span>&#x20B9; {`${loc.state}`}</span>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.finalprice}>
                        <strong>Total Amount</strong>
                        <strong>&#x20B9; {`${loc.state}`}</strong>
                    </div>
                    <p className={styles.yousave}>You Saved ₹420 on this order</p>
                    <button className={styles.chekout} onClick={execute}>CHECKOUT SECURELY</button>
                </div>
            </div>
        )
    }
}