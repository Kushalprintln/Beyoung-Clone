import React, { useContext, useState } from "react";
import styles from './NavOne.module.css';
import { SlLocationPin } from "react-icons/sl";
import LoginModal from "./LoginModal";
// AUTHENTICATION
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
export default function NavOne(){
    // console.log('NAVONE RERENDERED');
    const Authentication = useContext(AuthContext);
    // console.log(Authentication);
    const navigate = useNavigate();

    function sigingup(){
        if(!Authentication.status[0]){
            Authentication.loginmodal[1]('login');
            Authentication.loginmodal[0](true);
        }else{
            navigate('/myaccount/order');
        }
    }
    function loggingin(){
        if(!Authentication.status[0]){
            Authentication.loginmodal[1]('signup');
            Authentication.loginmodal[0](true);
        }
        else{
            signout();
        }
    }
    function signout(){
        Authentication.status[1](false);
        Authentication.jws[1]('')
        Authentication.data[1]('');
        Authentication.wish[1]([]);
        localStorage.removeItem('user');
        
    }
    return (
        <section className={styles.navone}>
            <div className={styles.container}>
                <div className={styles.left}><SlLocationPin size='1.5em' />TRACK YOUR ORDER</div>
                <div className={styles.right}>
                    <div className={styles.login} onClick={sigingup}>{Authentication.status[0] ? Authentication.data[0].name :'LOG IN'}</div>
                    <div className={styles.signup} onClick={loggingin}>{Authentication.status[0] ? 'LOGOUT':'SIGNUP'}</div>
                </div>
            </div>
        </section>
    )
}