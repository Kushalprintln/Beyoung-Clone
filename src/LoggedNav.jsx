// IMPORT REACT AND STYLES
import React, { useEffect, useState } from "react";
import styles from './LoggedNav.module.css'

// IMPORT ROUTER HOOK AND ICON
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

// LOGGEDNAV COMPONENT
export default function LoggedNav({ close, lf }) {
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
    return (
        <div className={lf === 'phone' ? styles.lognavfix : styles.lognav}>
            {lf === 'phone' && <div className={styles.slidebtn} onClick={() => { close(false) }}><FaAngleLeft /></div>}
            <div className={styles.profilelogo}>
                <div className={styles.initials}>KS</div>
                <div className={styles.name}>KUSHAL SONKAMBLE</div>
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
                <button className={styles.logoutbtn}>Logout</button>
            </div>
        </div>
    )
}