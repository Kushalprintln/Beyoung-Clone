import React from "react";
import styles from './Cart.module.css'
import cart from '../images/Cart.png'
export default function Cart(){
    return (
        <div className={styles.cart}>
            <img src={cart} alt="" />
        </div>
    )
}