import React from "react";
import styles from './NavOne.module.css';
import { SlLocationPin } from "react-icons/sl";
export default function NavOne(){
    return (
        <section className={styles.navone}>
            <div className={styles.container}>
                <div className={styles.left}><SlLocationPin size='1.5em' />TRACK YOUR ORDER</div>
                <div className={styles.right}>
                    <div className={styles.login}>LOG IN</div>
                    <div className={styles.signup}>SIGNUP</div>
                </div>
            </div>
        </section>
    )
}