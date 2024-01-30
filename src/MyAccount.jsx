import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import styles from './MyAccount.module.css';
import LoggedNav from "./LoggedNav";
import { FaAngleRight } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
export default function MyAccount(){
    const [navVisiable,setNavVisiabl] = useState(true);
    const [loadfor,setLoadFor] = useState('');
    function screen(){
        if(window.innerWidth<700){
            setLoadFor('phone');
            setNavVisiabl(false);
        }else{
            setLoadFor('desktop');
            setNavVisiabl(true);
        }
    }
    function scroll(){
        window.addEventListener("resize", screen);
    }
    useEffect(()=>{
        screen();
        scroll();
        return () => {
            window.removeEventListener("resize", screen);
          };
    },[])


    return (
        <MainContainer>
            <div className={styles.LoggInContainer}>
                {!navVisiable && <div className={styles.slidebtn} onClick={()=>{setNavVisiabl(true)}}><FaAngleRight /></div>}
                { navVisiable && <LoggedNav close={setNavVisiabl} lf={loadfor}/>}
                <Outlet/>
            </div>
        </MainContainer>
    )
}