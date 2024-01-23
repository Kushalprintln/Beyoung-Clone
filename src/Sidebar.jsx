import React, { useState } from "react";
import styles from './Sidebar.module.css';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Sidebar({close}){
    const Mencat = ['ALL','hoodie','jeans','jogger','kurta','pyjamas','shirt','shorts','sweater','tracksuit','trouser','tshirt']
    const Womencat = ['ALL','jeans','jumpsuit','jogger','kurti','shirt','tshirt'];
    const [selectedCat,setSelectedCat] = useState(Mencat);
    const [selectedgen,setSelectedgen] = useState('Men');
    return (
        <div className={styles.sidebar}>
            <div className={styles.closebtn} onClick={()=>{close(false)}}><IoMenu size={"1.5em"}/>CLOSE</div>
            <hr />
            <div className={styles.catfor}>
                <span onClick={()=>{setSelectedCat(Mencat),setSelectedgen('Men')}} className={selectedgen=='Men' ? styles.selected:null}>MEN</span>
                <span onClick={()=>{setSelectedCat(Womencat),setSelectedgen('Women')}} className={selectedgen=='Women' ? styles.selected:null}>WOMEN</span>
            </div>
            <hr />
            <div className={styles.subcats}>
                <ul>
                    {selectedCat.map((ele,idx)=>{
                        return <Link to={ele==='ALL'? `search/${selectedgen}`:`search/${selectedgen}/${ele}`} style={{textDecoration:'none',color:'inherit'}}  key={idx} onClick={()=>{close(false)}}><li >{ele}</li></Link>
                    })}
                </ul>
            </div>
        </div>
    )
}