// IMPORTING REACT, HOOKS AND STYLES
import React, { useEffect, useState } from "react";
import styles from './ProductPage.module.css';

// IMPORTING OTHER COMPONENTS
import MainContainer from "../ResponsiveContainer/MainContainer";
import Description from "./Description";
import Images from "../Carousel/Images";

// IMPORTING SAFE DELIVERY IMAGE
import safeDeliveryImage from '../../images/safedelivery.png'

// IMPORTING REACT ROUTER HOOKS
import { useLocation, useNavigate, useParams } from "react-router-dom";

// PRODUCT PAGE COMPONENT
export default function ProductPage() {
    // USING PARAMS FOR GETTING THE PRODUCT
    const params = useParams();
    const navigate = useNavigate();

    // STATE FOR SETTING PRODUCT DATA AND IMAGE ARRAY FOR THE FINAL DISPLAY
    const [ProductData, setProData] = useState();
    const [imgarr, setImgArr] = useState([]);

    // REQUIRMENTS FOR MAKING THE API CALL
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/product/${params.productID}`;
    const header = { projectId: 'f104bi07c490' };

    // GETTING THE PRODUCT DATA
    async function gettingProduct() {
        try{
        const resp = await fetch(URL, {
            method: 'GET',
            headers: header
        })
        const Data = await resp.json();
        setProData(Data.data);
        setImgArr([Data.data.displayImage, ...Data.data.images])
        }
        catch(e){
            navigate('/error/error');
        }
    }

    // USEEFEECT
    useEffect(() => {
        window.scrollTo(0, 0);
        gettingProduct();
    }, [])

    return (
        <>
            <MainContainer>
                <div className={styles.productdetail}>
                    <Images img={imgarr} />
                    <Description data={ProductData} />
                </div>
                <img src={safeDeliveryImage} alt="" />
            </MainContainer>
        </>
    )
}