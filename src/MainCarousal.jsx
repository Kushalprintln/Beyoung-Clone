// IMPORRING REACT AND CSS
import React from "react";
import styles from './MainCarousal.module.css'

import image from '../images/cards2.jpg'
export default function({data}){
    const data1 = {...data}
    return(
        <div className={styles.crousel}>
            <img src={`${data1.displayImage}`} alt="" />
        </div>
    )
}