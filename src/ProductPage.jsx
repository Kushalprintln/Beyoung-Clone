import React from "react";
import MainContainer from "./MainContainer";
import safeDeliveryImage from '../images/safedelivery.png'
import styles from './Productpage.module.css';
import Description from "./Description";
import MainCarousal from "./MainCarousal";
export default function ProductPage(){
    async function gettingProduct(){
        
    }
    return (
    <>
    <MainContainer>
        <div className={styles.productdetail}>
            <MainCarousal/>
            <Description/>
        </div>
        <img src={safeDeliveryImage} alt="" />
    </MainContainer>
    </>
    )
}