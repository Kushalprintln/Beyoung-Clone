import React from "react";
import styles from './FooterCol.module.css';
export default function FooterCol({heading,list}){
    return (
        <div className={styles.footerCol}>
            <h3>{heading}</h3>
            {list && <ul>
                {list.map((ele,idx)=>{
                    return <li key={idx}>{ele}</li>
                })}
            </ul>}
        </div>
    )
}