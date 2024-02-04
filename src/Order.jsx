// IIMPORTING REACT AND CSS;
import React from "react";
import styles from './Order.module.css';

// IMPROTING IMAGES 
import empty from '../images/empty.gif'
import add from '../images/AddImage.png'

// IMPORTING OTHER COMPONET
import Homebtn from "./Homebtn";

// ORDER COMPONENT
export default function Order() {
    return (
        <div className={styles.order}>
            <div className={styles.empty}>
                <img src={empty} alt="" />
                <p className={styles.emptyheading}>Haven't ordered yet?</p>
                <p>Explore and shop the coolest fashion now!</p>
            </div>
            <div>
                <img src={add} alt="" />
                <Homebtn text={'Continue Shopping'} />
            </div>
        </div>
    )
}