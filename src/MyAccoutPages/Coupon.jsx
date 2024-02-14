// IMPORTING REEAT AND CSS
import React from "react";
import styles from './Coupon.module.css';

// IMPORTING IMAGE
import coupons from '../../images/coupon.png'

// IMPORTING OTHER COMPONENTS
import Homebtn from "../Buttons/Homebtn";

// COUPON COMPONENT
export default function Coupon() {
    return (
        <div className={styles.coupon}>
            <p>This is the Dummy Coupon Page</p>
            <img src={coupons} alt="coupons" />
            <Homebtn text={'Start Shopping'} />
        </div>
    )
}