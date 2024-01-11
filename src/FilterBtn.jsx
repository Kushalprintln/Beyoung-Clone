import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from './FilterBtn.module.css';
import Coloricon from "./Coloricon";
export default function FilterBtn({type}){
    const [showfilter, setShowfilter] = useState(false);
    if(type ==='color'){
        return(
            <div className={styles.filterbtn} onClick={()=>{setShowfilter(prev=>!prev)}}>
                <div className={styles.filheading}><span>COLOR</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.colfilter}>
                    <Coloricon clr='red'/>
                    <Coloricon clr='blue'/>
                    <Coloricon clr='green'/>
                    <Coloricon clr='pink'/>
                    <Coloricon clr='red'/>
                    <Coloricon clr='blue'/>
                    <Coloricon clr='green'/>
                    <Coloricon clr='pink'/>
                </div>}
            </div>
        )
    }else if(type === 'size'){
        return(
            <div className={styles.filterbtn} onClick={()=>{setShowfilter(prev=>!prev)}}>
                <div className={styles.filheading}><span>SIZE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.sizefilter}>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>}
            </div>
        )
    }else if(type === 'price'){
        return(
            <div className={styles.filterbtn} onClick={()=>{setShowfilter(prev=>!prev)}}>
                <div className={styles.filheading}><span>PRICE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.pricefilter}>
                    <span>Price : High-Low</span>
                    <span>Price : Low-High</span>
                </div>}
            </div>
        )
    }
}