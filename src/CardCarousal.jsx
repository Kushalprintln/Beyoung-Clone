import React from "react";
import styles from './CardCarousal.module.css';
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa";
import Card from "./Card";
export default function CardCarousal({data}){
    return (
        <div className={styles.carousal}>
            <div className={styles.btndivleft}><FaChevronLeft size={'2em'} style={{background:'white', padding:'2px', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"} }/></div>
            <div className={styles.carousalContainer}>
                <div className={styles.innerContainer}>
                    {/* <Card /> */}
                    {data && data.map((ele,idx)=>{
                        return <Card key={idx} br={true} data = {ele}/>
                    })}
                </div>
            </div>
            <div className={styles.btndivright}><FaChevronRight size={'2em'} style={{background:'white', padding:'2px',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"} } /></div>
        </div>
    )
}