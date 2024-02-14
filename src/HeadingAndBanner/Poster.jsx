// IMPORTING REACT AND CSS
import React from "react";
import styles from './Poster.module.css';

// IMPORTIIING BANNER IMAGE
import bannerimage from '../../images/new-year-sale-banner-desktop-view.jpg'

// POSTER COMPONENT
export default function Poster() {
    return (
        <div className={styles.banner}>
            <img src={bannerimage} alt="bannerImage" />
        </div>
    )
}