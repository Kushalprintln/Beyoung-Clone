import React from "react";
import styles from './Display.module.css'
import Card from "./Card";
export default function Display(){
    return(
        <div className={styles.display}>
            <div>
                <h2>MEN PLAIN SHIRTS</h2>
                <p>Plain Shirts for Men - Buy mens plain shirt online in India starting at ₹799 at Beyoung. Check out the latest styles and colors of 9+ plain colour shirts for men online. You can get ₹100 OFF on all plain cotton shirts when you spend more than ₹999, use the coupon code "BEYOUNG100". Free Shipping. COD Available.</p>
            </div>
            <div className={styles.cardContainer}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}