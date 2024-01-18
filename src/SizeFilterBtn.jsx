import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import styles from './SizeFilterBtn.module.css';
export default function SizeSelectBtn({size}){
    const Pro = useContext(ProductContext);
    function handelSize(){
        Pro.sizeSelection[0] === `${size}` ? Pro.sizeSelection[1]('') : Pro.sizeSelection[1](`${size}`)
    }
 return (<span className={Pro.sizeSelection[0] === `${size}` ? styles.sel  : styles.unsel} onClick={handelSize}>{size}</span>)
}