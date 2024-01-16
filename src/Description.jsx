import React from "react";
import styles from './Description.module.css';
import { CiHeart  } from "react-icons/ci";
import Coloricon from "./Coloricon";
export default function Description({data}){
    const data1 = {...data};
    return(
        <div className={styles.productdescription}>
            <div className={styles.desheading}>
                <h1>{data1.name}</h1>
                <div className={styles.heartico}><CiHeart size={'1.5em'} strokeWidth={'0.5'} /></div>
            </div>
            <div className={styles.prodetails}>
                <span className={styles.typeof}>{data1.subCategory}</span>
                <span className={styles.pricetag}>
                    <strong>₹ 1199</strong>
                    <small>₹ 2999</small>
                    <span>(60% off)</span>
                </span>
                <span className={styles.taxline}>Inclusive of All Taxes + Free Shipping</span>
                <span className={styles.discountline}>Extra ₹100 OFF on ₹999 (Code:BEYOUNG100)</span>   
            </div>
            <div className={styles.colorselect}>
                <h1>COLOR : <span>Green</span></h1>
                <div className={styles.coloroption}>
                    <Coloricon clr='red'/>
                    <Coloricon clr='blue'/>
                    <Coloricon clr='green'/>
                </div>
            </div>
            <div className={styles.sizeopt}>
                <span className={styles.sizeheading}>
                    <span className={styles.size}>SIZE</span>
                    <span className={styles.sizechart}>SIZE CHART</span>
                </span>
                <span className={styles.sizeoption}>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                </span>
            </div>
            <div className={styles.qntoption}>QTY: </div>
            <div className={styles.buttons}>
                <button className={styles.cartbtn}>Add To Cart</button>
                <button className={styles.buybtn}>Buy Now</button>
            </div>
        </div>
    )
}