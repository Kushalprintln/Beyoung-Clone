import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import safeDeliveryImage from '../images/safedelivery.png'
import styles from './Productpage.module.css';
import Description from "./Description";
import MainCarousal from "./MainCarousal";
import { useLocation, useParams } from "react-router-dom";
import Images from "./Images";
export default function ProductPage(){
    const direction = useLocation();
    const params = useParams();
    const [ProductData,setProData] = useState();
    const [imgarr,setImgArr] =useState([]);

    console.log(params)
    console.log(direction);

    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/product/${params.productID}`;
    const header = {projectId:'f104bi07c490'};

    async function gettingProduct(){
        const resp = await fetch(URL,{
            method:'GET',
            headers: header
        })
        const Data = await resp.json();
        console.log(Data.data);
        setProData(Data.data);
        setImgArr([Data.data.displayImage,...Data.data.images])
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
        gettingProduct();
    },[])
    return (
    <>
    <MainContainer>
        <div className={styles.productdetail}>
            <Images img={imgarr} />
            <Description  data={ProductData}/>
        </div>
        <img src={safeDeliveryImage} alt="" />
    </MainContainer>
    </>
    )
}