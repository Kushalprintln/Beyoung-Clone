// IMPORTING REACT, STYLES AND HOOKS
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from './MyAccount.module.css';

// IMPORTING OTHER COMPONENTS
import MainContainer from "./MainContainer";
import LoggedNav from "./LoggedNav";

// IMPORING ICON 
import { FaAngleRight } from "react-icons/fa6";

// MYACCOUNT COMPONENT
export default function MyAccount() {
    // DECLEARING STATE FOR SIDE SLIDING FOR PHONE
    const [navVisiable, setNavVisiabl] = useState(true);
    const [loadfor, setLoadFor] = useState('');
    function screen() {
        if (window.innerWidth < 700) {
            setLoadFor('phone');
            setNavVisiabl(false);
        } else {
            setLoadFor('desktop');
            setNavVisiabl(true);
        }
    }
    function scroll() {
        window.addEventListener("resize", screen);
    }
    // USEEFFECT
    useEffect(() => {
        window.scrollTo(0, 0);
        screen();
        scroll();
        return () => {
            window.removeEventListener("resize", screen);
        };
    }, [])

    return (
        <MainContainer>
            <div className={styles.LoggInContainer}>
                {!navVisiable && <div className={styles.slidebtn} onClick={() => { setNavVisiabl(true) }}><FaAngleRight /></div>}
                {navVisiable && <LoggedNav close={setNavVisiabl} lf={loadfor} />}
                <Outlet />
            </div>
        </MainContainer>
    )
}