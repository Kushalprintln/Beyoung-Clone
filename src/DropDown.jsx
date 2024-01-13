import React from "react";
import styles from './DropDown.module.css'
import dropdownimg from '../images/desktop-navigation11.jpg'
import { Link } from "react-router-dom";
export default function DropDown({sfor,catagories,visibility,setvis}){
    // console.log('indropdown');
    // console.log(catagories);

    return (
        <div className={styles.dropdown} onMouseOver={()=>{setvis(true)}} onMouseOut={()=>{setvis(false)}}>
            <div className={styles.catogeries}>
                <h4>Catogeries ({sfor})</h4>
                <ul>
                    {catagories.map((ele,idx)=>{
                        return <li key={idx}><Link to={`search/${sfor}/${ele}`} style={{textDecoration:'none',color:'inherit'}}>{ele}</Link> </li>
                    })}
                </ul>
            </div>
            <div className={styles.dropimg}>
                <img src={dropdownimg} alt="" />
            </div>
        </div>
    )
}