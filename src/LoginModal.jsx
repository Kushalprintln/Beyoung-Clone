import React from "react";
import styles from './LoginModal.module.css'
import loginImg from '../images/login-and-signup-image.jpg';
export default function LoginModal({close}){
    return (
        <div className={styles.modalcontainer}>
            <div className={styles.modal}>
                <span className={styles.closemodal} onClick={()=>{close(false)}}>X</span>
                <img src={loginImg} alt="" />
                <p>LogIn Or SignUP</p>
            </div>
        </div>
    )
}