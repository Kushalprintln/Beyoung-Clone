// IMPORT REACT AND STYLES
import React, { useContext, useEffect, useState } from "react";
import styles from './LoggedNav.module.css'

// IMPORT ROUTER HOOK AND ICON
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

// IMPORTING AUTH
import AuthContext from "./AuthContext";

// LOGGEDNAV COMPONENT
export default function LoggedNav({ close, lf }) {
    //INITILIZING AUTHENTICATIO
    const Authentication = useContext(AuthContext);

    // STATE FOR NAMEINITIALS FOR THE PROFILE CIRCLE
    const [namein,setNamein] = useState('');

    //SETTING NAME INITIALS
    function name(){
        // Authentication.
        let Name = Authentication.data[0].name.split(' ');
        let initials = `${Name[0].charAt(0)}${Name[1].charAt(0)}`
        console.log(initials)
        setNamein(initials);
    }

    // ACTIVE STYLES
    const navstyle = ({ isActive }) => ({
        font: 'inherit',
        textDecoration: 'none',
        background: 'none',
        color: isActive ? '#000' : 'inherit',
        fontWeight: isActive ? '600' : '400',
    });

    // COMPRESSING SIDE NAV IF PHONE MODE
    function closeOnlyPhone() {
        if (lf === 'phone') {
            close(false);
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

    //  SETTING INITIAL ONLY WHEN LOGGINED OTHER WISE ERROR IN READING SPLIT METHOD
    useEffect(()=>{
        if(Authentication.status[0]){
            name();
        }
    },[Authentication.status[0]])
    

    return (
        <div className={lf === 'phone' ? styles.lognavfix : styles.lognav}>
            {lf === 'phone' && <div className={styles.slidebtn} onClick={() => { close(false) }}><FaAngleLeft /></div>}
            <div className={styles.profilelogo}>
                <div className={styles.initials}>{namein}</div>
                <div className={styles.name}>{Authentication.data[0].name}</div>
                <div className={styles.beyoungster}>#Beyoungster</div>
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li onClick={closeOnlyPhone}><NavLink to={'order'} style={navstyle}>Order</NavLink></li>
                    <li onClick={closeOnlyPhone}><NavLink to={'address'} style={navstyle}>Address</NavLink></li>
                    <li onClick={closeOnlyPhone}><NavLink to={'profile'} style={navstyle}>Profile</NavLink></li>
                    <li onClick={closeOnlyPhone}><NavLink to={'wishlist'} style={navstyle}>Wishlist</NavLink></li>
                    <li onClick={closeOnlyPhone}><NavLink to={'coupon'} style={navstyle}>Coupon</NavLink></li>
                </ul>
                <button className={styles.logoutbtn} onClick={signout}>Logout</button>
            </div>
        </div>
    )
}