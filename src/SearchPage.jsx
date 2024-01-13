import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import FullBanner from "./FullStripBanner";
// CATAOGERIES MEN BANNER.
import MenShirt from '../images/BB-shirt-category-banner-desktop-view_19_10_2023.jpg'
import MenHoodies from '../images/Hoodies-desktop-view-banner_30_12_2023.jpg'
import MenJeans from '../images/jeans-banner-desktop-view_25_12_2023_1920x475.jpg'
import MenJoggers from '../images/KNITTED-JOGGERS-Category-banner-desktop-view_31_10_2023_1920x475.jpg'
import MenPajamas from '../images/Pyjamas-categry-banner-desktop-view_24_10_2023_1920x475.jpg'
import MenShorts from '../images/Shorts-banner-desktop-view_28_08_2023_1920x475.jpg'
import MenSweater from '../images/Sweatshirts-winter-categry-banner-desktop-view_30_12_2023.jpg'
import MenTrack from '../images/GYM-Category-banner-desktop-view_09_09_2023_1920x475.jpg'
import MenTrouser from '../images/Chinos-banner-desktop-view_29_12_2023_1920x475.jpg'
import MenTshirt from '../images/Printed-T-Shirts-desktop-view_22_12_2023_1920x475.jpg'
import MenAll from '../images/card-banner-desktop-view4.gif'

// CATAODERIES WOMEN BANNER
import WomenJeans from '../images/Jeggings_Category_Banner_Desktop_11_3_2022_1920x475.jpg'
import WomenClothing from '../images/Women-clothing-banner-desktop-view_28_07_2023_1920x475.jpg'
import WomenKurti from '../images/kurti-categry-banner-desktop-view_25_08_2023_1920x475.jpg'
import WomenShirt from '../images/Women_s-Shirt-Category-Banner-DESKTOP-VIEW_12_12_2022_1920x475.jpg'
import WomenTshirt from '../images/Printed-tshirt-categry-desktop-view-banner_16_08_2023_1920x475.jpg'

import Filter from "./Filter";
import Display from "./display";
import styles from './SearchPage.module.css'
import { useParams } from "react-router-dom";
export default function SearchPage(){
    const params = useParams();
    // console.log(params);
    const [banner,setBanner] = useState();
    function SettingBanner(){
        if(params.gender === 'Men'){
            if(params.subCategory === 'hoodie'){
                setBanner(MenHoodies);
            }
            else if(params.subCategory === 'jeans'){
                setBanner(MenJeans);
            }
            else if(params.subCategory === 'jogger'){
                setBanner(MenJoggers);
            }
            else if(params.subCategory === 'pyjamas'){
                setBanner(MenPajamas);
            }
            else if(params.subCategory === 'shirt'){
                setBanner(MenShirt);
            }
            else if(params.subCategory === 'shorts'){
                setBanner(MenShorts);
            }
            else if(params.subCategory === 'sweater'){
                setBanner(MenSweater);
            }
            else if(params.subCategory === 'tracksuit'){
                setBanner(MenTrack);
            }
            else if(params.subCategory === 'trouser'){
                setBanner(MenTrouser);
            }
            else if(params.subCategory === 'tshirt'){
                setBanner(MenTshirt);
            }else {
                setBanner(MenAll);
            }

        }else{
            if(params.subCategory === 'jeans'){
                setBanner(WomenJeans);
            }
            else if(params.subCategory === 'jumpsuit' || params.subCategory === 'jogger'){
                setBanner(WomenClothing);
            }
            else if(params.subCategory === 'kurti'){
                setBanner(WomenKurti);
            }
            else if(params.subCategory === 'shirt'){
                setBanner(WomenShirt);
            }
            else if(params.subCategory === 'tshirt'){
                setBanner(WomenTshirt);
            }
            else {
                setBanner(WomenClothing);
            }
        }
    }
    useEffect(()=>{
        SettingBanner();
    },[params])
    
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