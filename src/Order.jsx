import React from "react";
import styles from './Order.module.css';
import empty from '../images/empty.gif'
import add from '../images/AddImage.png'
import Homebtn from "./Homebtn";
export default function Order(){
    return(
        <div className={styles.order}>
            <div className={styles.empty}>
                <img src={empty} alt="" />
                <p className={styles.emptyheading}>Haven't ordered yet?</p>
                <p>Explore and shop the coolest fashion now!</p>
            </div>
            <div>
                <img src={add} alt="" />
                <Homebtn text={'Continue Shopping'}/>
            </div>
        </div>
    )
}