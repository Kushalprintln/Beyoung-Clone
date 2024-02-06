// IMPORITNG REACT AND HOOKS AND STYLES
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from './NavOne.module.css';

// IMPORTING REACT ICONS
import { SlLocationPin } from "react-icons/sl";

// IMPORTING AUTHENTICATION CONTEXT
import AuthContext from "./AuthContext";

// NAVONE COMPONENT
export default function NavOne() {
    // console.log('NAVONE RERENDERED');

    // INITILIZING AUTHENTICAION AND USENAVIGATION;
    const Authentication = useContext(AuthContext);
    const navigate = useNavigate();

    // SIGNIUP FUNCTION 
    function sigingup() {
        if (!Authentication.status[0]) {
            Authentication.loginmodal[1]('login');
            Authentication.loginmodal[0](true);
        } else {
            navigate('/myaccount/order');
        }
    }

    // LOGIN FUNCTION 
    function loggingin() {
        if (!Authentication.status[0]) {
            Authentication.loginmodal[1]('signup');
            Authentication.loginmodal[0](true);
        }
        else {
            signout();
        }
    }

    // SIGNOUT FUNCTION;
    function signout() {
        Authentication.status[1](false);
        Authentication.jws[1]('')
        Authentication.data[1]('');
        Authentication.wish[1]([]);
        Authentication.cart[1]({ items: [] });
        localStorage.removeItem('user');
    }
    
    return (
        <section className={styles.navone}>
            <div className={styles.container}>
                <div className={styles.left}><SlLocationPin size='1.5em' />TRACK YOUR ORDER</div>
                <div className={styles.right}>
                    <div className={styles.login} onClick={sigingup}>{Authentication.status[0] ? Authentication.data[0].name : 'LOG IN'}</div>
                    <div className={styles.signup} onClick={loggingin}>{Authentication.status[0] ? 'LOGOUT' : 'SIGNUP'}</div>
                </div>
            </div>
        </section>
    )
}