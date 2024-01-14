import React, { useEffect, useState } from "react";
import styles from './Display.module.css'
import Card from "./Card";
import { useParams } from "react-router-dom";
export default function Display({pera,head,mainheading,data}){

    return(
        <div className={styles.display}>
            <div>
                <h2>{mainheading}</h2>
                <p><strong>{head}</strong>{pera}</p>
            </div>
            <div className={styles.cardContainer}>
                {data && data.map((ele,idx)=>{
                    return <Card data={ele} key={idx}/>
                })}
            </div>
        </div>
    )
}