import React from "react";
import MainContainer from "./MainContainer";
import FullBanner from "./FullStripBanner";
import banner from '../images/BB-shirt-category-banner-desktop-view_19_10_2023.jpg'
import Filter from "./Filter";
import Display from "./display";
import styles from './SearchPage.module.css'
export default function SearchPage(){
    return(
        <>
        <FullBanner img={banner}/>
        <MainContainer >
            <div className={styles.searchcontainer}>
                <Filter/>
                <Display/>
            </div>
        </MainContainer>
        </>
    )
}