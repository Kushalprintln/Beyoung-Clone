// IMPORTING REACT STYLE AND HOOK
import React, { useContext } from "react";
import styles from './SizeFilterBtn.module.css';

// IMPORTING PRODUCT CONTEXT 
import ProductContext from "./ProductContext";

// SIZESELECTBTN COMPONENT
export default function SizeSelectBtn({ size }) {
    // INITIALIZING CONTEXT
    const Pro = useContext(ProductContext);

    // HANDEL SIZE FUNCTION
    function handelSize() {
        Pro.sizeSelection[0] === `${size}` ? Pro.sizeSelection[1]('') : Pro.sizeSelection[1](`${size}`)
    }
    return (<span className={Pro.sizeSelection[0] === `${size}` ? styles.sel : styles.unsel} onClick={handelSize}>{size}</span>)
}