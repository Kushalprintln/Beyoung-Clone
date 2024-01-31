import React from "react";
import Poster from "./Poster";
import MainContainer from "./MainContainer";
import CardCarousal from './CardCarousal';
import HeadingStrip from "./HeadingStrip";
import FullBanner from './FullStripBanner';
import { useEffect, useState } from 'react';
//Importing Images
import shippingImage from '../images/free-shipping-desktop-view.jpg'
import shirtposter from '../images/shirts-section-desktop-view.jpg'
import menwomenposter from '../images/strip.jpg'
import fullbanner from '../images/Bhuvan-strip-banner-desktop.jpg';
import Slider from "./Slider";
import Paymentslider from "./PaymentSlider";
import LogoCarousel from "./LogoCarousel";

export default function Home(){
  // console.log('HOME RERENDERED');
    const basicDom = 'https://academics.newtonschool.co/';
    const categoriesApi = 'api/v1/ecommerce/clothes/categories';
    const productApi = 'api/v1/ecommerce/clothes/products?filter={"gender":"Men"}';
    const productwomen = 'api/v1/ecommerce/clothes/products?filter={"gender":"Women"}'
    const catURL = `${basicDom}${categoriesApi}`; // NOT USING THIS API IN THE APPLICATION;
    const proURL = `${basicDom}${productApi}`;
    const proWomenURL = `${basicDom}${productwomen}`;
    const header = {projectId:'f104bi07c490'};
    const [products,setPro] = useState([]);
    const [Womproducts,setWomPro] = useState([]);

    async function getProData(){
      // GETTING MEN PRODUCTS
        let prores = await fetch(proURL,{
          method:'GET',
          headers: header
        })
        // CONVERTING IT IN JSON AND SETTING THE DATA
        let prodata = await prores.json();
        setPro(prodata.data)
        // GETTING WOMENS DATA;
        let reswomen = await fetch(proWomenURL,{
          method:'GET',
          headers: header
        });
        // CONVERTING IT IN JSON AND SETTING THE DATA
        let womdata = await reswomen.json();
        setWomPro(womdata.data);
    
      }

      useEffect(()=>{
        window.scrollTo(0, 0);
        getProData();
      },[])
    return (
        <>
        <Poster/>
        <MainContainer>
            <img src={shippingImage} alt="" />
            <img src={shirtposter} alt="" />
            <HeadingStrip heading='FOR MEN'/>
            <CardCarousal data={products}/>
            <Paymentslider/>
            {/* <Slider style={{width:'90%',margin:'0 auto'}}/> */}
            <img src={menwomenposter} alt="" />
            <HeadingStrip heading='FOR WOMEN'/>
            <CardCarousal data={Womproducts}/>
        </MainContainer>
        <FullBanner img={fullbanner}/>
        <MainContainer>
            <HeadingStrip heading='FOR WOMEN'/>
            <CardCarousal data={products}/>
            <LogoCarousel/>
        </MainContainer>
        </>
    )
}