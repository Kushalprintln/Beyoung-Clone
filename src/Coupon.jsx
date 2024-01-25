import React from "react";
import styles from './Coupon.module.css';
import coupons from '../images/coupon.png'
import Homebtn from "./Homebtn";
export default function Coupon(){
    return (
    <div className={styles.coupon}>
        <p>This is the Dummy Coupon Page</p>
        <img src={coupons} alt="coupons" />
        <Homebtn text={'Start Shopping'}/>
    </div>
    )
}