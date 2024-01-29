import React from "react";
import styles from './Payment.module.css';
import pay from '../images/payment.png'
export default function Payment(){
    return (
        <div className={styles.payment}>
            <img src={pay} alt="" />
        </div>
    )
}