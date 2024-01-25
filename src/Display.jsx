import React, { useContext } from "react";
import styles from './Display.module.css'
import Card from "./Card";
import ProductContext from "./ProductContext";
export default function Display(){
    const productData = useContext(ProductContext);
    return(
        <div className={styles.display} >
            <div>
                <h2>{productData.pageHeading}</h2>
                <p><strong>{productData.heading}</strong>{productData.pera}</p>
            </div>
            <div className={styles.cardContainer}>
                {productData.data.map((ele,idx)=>{
                    return <Card data={ele} key={idx}/>
                })}
            </div>
        </div>
    )
}