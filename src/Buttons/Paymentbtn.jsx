import React from "react";
import styles from './Paymentbtn.module.css';

export default function Paymentbtn({type,logo,pay}){
    function handlepay(){
        pay[1](type);
    }
    return (
        <div className={styles.paymentbtn} onClick={handlepay} style={{borderLeft: pay[0]===type && '3px solid #fd0'}}>
            <span className={pay[0]===type ? styles.selected :styles.circle }>
            </span>
            <img src={logo} alt="" />
            <strong>{type}</strong>
        </div>
    )
}