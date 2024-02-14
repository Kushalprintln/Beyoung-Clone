// IMPORTING REACT, STYLES AND HOOKS
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './MyAccount.module.css';

// IMPORTING OTHER COMPONENTS
import MainContainer from "../ResponsiveContainer/MainContainer";
import LoggedNav from "../NavigationBars/LoggedNav";

// IMPORTING AUTHENTICATION
import AuthContext from "../Contexts/AuthContext";

// IMPORING ICON 
import { FaAngleRight } from "react-icons/fa6";

// MYACCOUNT COMPONENT
export default function MyAccount() {

    // INITILIZING AUTHENTICATION
    const Authentication = useContext(AuthContext);
    // console.log(Authentication);
    const navigate = useNavigate();


    // DECLEARING STATE FOR SIDE SLIDING FOR PHONE
    const [navVisiable, setNavVisiabl] = useState(true);
    const [loadfor, setLoadFor] = useState('');

    // SCREEN FUNCTION FOR RESPONSIVNESS
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

    // FOR NAVIGATING BACK TO HOME WHEN LOGGED OUT
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/');
        }
    }, [Authentication.status[0]]);

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