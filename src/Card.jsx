import React from "react";
import styles from './Card.module.css'
import bbimg from '../images/full-sleeve-image-bb.jpg'
export default function Card({data}){
    const product = {...data};
    // console.log(data);
    // console.log('card pro' + product.name);
    const discount = Math.floor(Math.random()* (70 - 50 + 1) ) + 50;
    const inc = 100-discount;
    const incPrice = Math.floor((product.price*100)/inc);

    if(data){
        return (
            <div className={styles.card}>
                <img src={`${product.displayImage}`} alt="fullslieveimg" />
                <div className={styles.details}>
                    <p className={styles.hed}>{product.name}</p>
                    <p className={styles.cat}>{product.subCategory}</p>
                    <p className={styles.price}>
                        <span className={styles.pp}>&#x20B9; {product.price}</span> 
                        <span className={styles.sm}>{incPrice}</span>
                        <span className={styles.st}>{`(${discount}%0ff)`}</span>
                    </p>
                </div>
            </div>
        )
    }
    else{
        //returning dummy card if no data
        return (
            <div className={styles.card}>
                <img src={bbimg} alt="fullslieveimg" />
                <div className={styles.details}>
                    <p className={styles.hed}>Sand Brown Solid Urban Shirt for Men</p>
                    <p className={styles.cat}>Urban Shirts</p>
                    <p className={styles.price}>
                        <span className={styles.pp}>&#x20B9; 1499</span> 
                        <span className={styles.sm}>2000</span>
                        <span className={styles.st}>(50%0ff)</span>
                    </p>
                </div>
            </div>
        )
    }
}