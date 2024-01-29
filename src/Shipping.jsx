import React from "react";
import styles from './Shipping.module.css';
import add from '../images/address.png'
export default function Shipping(){
    return (
        <div className={styles.shipping}>
            <img src={add} alt="" />
        </div>
    )
}