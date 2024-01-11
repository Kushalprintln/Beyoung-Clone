import React from "react";
import styles from './MainCarousal.module.css'
import image from '../images/cards2.jpg'
export default function(){
    return(
        <div className={styles.crousel}>
            <img src={image} alt="" />
        </div>
    )
}