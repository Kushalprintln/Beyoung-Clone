// IMPORTING REACT CSS AND CONTEXT
import React, { useContext } from "react";
import styles from './Display.module.css'

// IMPORTING CARD COMPONENT AND PRODUCT CONTEXT
import Card from "./Card";
import ProductContext from "./ProductContext";

// DISPLAY COMPONENT
export default function Display() {
    // INITIALIZING CONTEXT
    const productData = useContext(ProductContext);

    return (
        <div className={styles.display} >
            <div>
                <h2>{productData.pageHeading}</h2>
                <p><strong>{productData.heading}</strong>{productData.pera}</p>
            </div>
            <div className={styles.cardContainer}>
                {productData.data.map((ele, idx) => {
                    return <Card data={ele} key={idx} />
                })}
            </div>
        </div>
    )
}