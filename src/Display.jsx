import React, { useEffect, useState } from "react";
import styles from './Display.module.css'
import Card from "./Card";
import { useParams } from "react-router-dom";
export default function Display(){
    const params = useParams();
    // console.log('Inside display');
    // console.log(params);
    // console.log(params.subCategory)
    const filter = JSON.stringify(params);

    const [SearchData, setSearchData] = useState();
    const [searchHeading,setSearchHeading] = useState();

    // const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"${params.gender}","subCategory":"${params.subCategory}"}&limit=150`;
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${filter}&limit=150`;

    const header = {projectId:'f104bi07c490'};
    async function gettingData(){
        let searchResp = await fetch(URL,{
            method:'GET',
            headers: header
          });
        let searchData = await searchResp.json();
        setSearchData(searchData.data);
    }
    function setHeading(){
        if(params.subCategory === undefined){
            setSearchHeading(`${params.gender}`)

        }else{
            setSearchHeading(`${params.gender} ${params.subCategory}`)
        }
    }
    useEffect(()=>{
        setHeading();
        gettingData();
    },[params])

    return(
        <div className={styles.display}>
            <div>
                <h2>{searchHeading}</h2>
                <p>Plain Shirts for Men - Buy mens plain shirt online in India starting at ₹799 at Beyoung. Check out the latest styles and colors of 9+ plain colour shirts for men online. You can get ₹100 OFF on all plain cotton shirts when you spend more than ₹999, use the coupon code "BEYOUNG100". Free Shipping. COD Available.</p>
            </div>
            <div className={styles.cardContainer}>
                {SearchData && SearchData.map((ele,idx)=>{
                    return <Card data={ele} key={idx}/>
                })}
            </div>
        </div>
    )
}