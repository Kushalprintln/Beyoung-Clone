// IMPORTING REACT AND CSS
import React from "react";
import styles from './Payment.module.css';

// IMPORING PAYIMAGE
import pay from '../images/payment.png'

// PAYMENT COMPONENT
export default function Payment() {
    return (
        <div className={styles.payment}>
            <img src={pay} alt="" />
        </div>
    )
}