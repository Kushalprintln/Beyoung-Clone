import React from "react";
import styles from './Wishlist.module.css';
import empty from '../images/EMPTY-WISHLIST-PAGE.jpg'
import Homebtn from "./Homebtn";
export default function Wishlist(){
    return (
    <div className={styles.wishlist}>
        <div className={styles.wishlistcontianer}></div>
        <div className={styles.empty}>
            <img src={empty} alt="" />
            <Homebtn text={'Continue Shopping'}/>
        </div>
    </div>
    )
}