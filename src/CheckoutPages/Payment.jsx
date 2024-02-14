// IMPORTING REACT AND CSS
import React from "react";
import styles from './Payment.module.css';

// IMPORING PAYIMAGE
import checkpay from '../../images/checkoutPay.png'

// PAYMENT COMPONENT
export default function Payment() {
    return (
        <div className={styles.payment}>
            <p>This payment is the dummy page</p>
            <img src={checkpay} alt="" />
        </div>
    )
}