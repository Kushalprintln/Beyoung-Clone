import React from "react";
import bannerimage from '../images/new-year-sale-banner-desktop-view.jpg'
import styles from './Poster.module.css';
export default function Poster(){
    return (
        <div className={styles.banner}>
            <img src={bannerimage} alt="bannerImage" />          
        </div>
    )
}