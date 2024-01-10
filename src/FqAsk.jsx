import React, { useState } from "react";
import styles from './FqAsk.module.css';
import { FaChevronDown } from "react-icons/fa";
export default function FqAsk({heading,pheading,pcontent}){
    const [show , setShow] = useState(false);
    return (
        <div className={styles.fqcontainer} onClick={()=>{setShow(prev=>{return !prev})}}>
            <div className={styles.heading}>
                <h2>{heading}</h2>
                <FaChevronDown size={'1.5em'} color="#ffdd00 "/>
            </div>
            {show && <div className={styles.hidden}>
                <h4>{pheading}</h4>
                <p>
                {pcontent}
                </p>
            </div>}
        </div>
    )
}