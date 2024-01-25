import React, { useState } from "react";
import styles from './NavOne.module.css';
import { SlLocationPin } from "react-icons/sl";
import LoginModal from "./LoginModal";
export default function NavOne(){
    const [modal,setmodal]= useState(false)
    return (
        <section className={styles.navone}>
            <div className={styles.container}>
                <div className={styles.left}><SlLocationPin size='1.5em' />TRACK YOUR ORDER</div>
                <div className={styles.right}>
                    <div className={styles.login} onClick={()=>{setmodal(true)}}>LOG IN</div>
                    <div className={styles.signup}>SIGNUP</div>
                </div>
            </div>
            {modal && <LoginModal close={setmodal}/>}
        </section>
    )
}