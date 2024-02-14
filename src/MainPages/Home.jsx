// IMPORTING REACT AND HOOKS
import React from "react";
import { useEffect, useState } from 'react';

// IMPORTING OTHER COMPONENTS
import Poster from "../HeadingAndBanner/Poster";
import MainContainer from "../ResponsiveContainer/MainContainer";
import HeadingStrip from "../HeadingAndBanner/HeadingStrip";
import CardCarousal from '../Carousel/CardCarousal';
import Paymentslider from "../Carousel/PaymentSlider";
import FullBanner from '../HeadingAndBanner/FullStripBanner';
import LogoCarousel from "../Carousel/LogoCarousel";
import Slider from "../FutureUse/Slider";

// IMPORTING IMAGES
import shippingImage from '../../images/free-shipping-desktop-view.jpg'
import shirtposter from '../../images/shirts-section-desktop-view.jpg'
import menwomenposter from '../../images/strip.jpg'
import fullbanner from '../../images/Bhuvan-strip-banner-desktop.jpg';

// HOME COMPONENT
export default function Home() {
  // console.log('HOME RERENDERED');
  // REQUIRMENT FOR MAKING API CALL
  const basicDom = 'https://academics.newtonschool.co/';
  const categoriesApi = 'api/v1/ecommerce/clothes/categories';
  const productApi = 'api/v1/ecommerce/clothes/products?filter={"gender":"Men"}';
  const productwomen = 'api/v1/ecommerce/clothes/products?filter={"gender":"Women"}'
  const catURL = `${basicDom}${categoriesApi}`; // NOT USING THIS API IN THE APPLICATION;
  const proURL = `${basicDom}${productApi}`;
  const proWomenURL = `${basicDom}${productwomen}`;
  const header = { projectId: 'f104bi07c490' };

  // DECLARING STATES FOR PRODUCT AND WOMEN PRODUCTS
  const [products, setPro] = useState([]);
  const [Womproducts, setWomPro] = useState([]);

  async function getProData() {
    // GETTING MEN PRODUCTS
    let prores = await fetch(proURL, {
      method: 'GET',
      headers: header
    })
    // CONVERTING IT IN JSON AND SETTING THE DATA
    let prodata = await prores.json();
    setPro(prodata.data)
    // GETTING WOMENS DATA;
    let reswomen = await fetch(proWomenURL, {
      method: 'GET',
      headers: header
    });
    // CONVERTING IT IN JSON AND SETTING THE DATA
    let womdata = await reswomen.json();
    setWomPro(womdata.data);
  }

  // USEEFFECT 
  useEffect(() => {
    window.scrollTo(0, 0);
    getProData();
  }, [])

  return (
    <>
      <Poster />
      <MainContainer>
        <img src={shippingImage} alt="" />
        <img src={shirtposter} alt="" />
        <HeadingStrip heading='FOR MEN' />
        <CardCarousal data={products} />
        <Paymentslider />
        {/* <Slider style={{width:'90%',margin:'0 auto'}}/> */}
        <img src={menwomenposter} alt="" />
        <HeadingStrip heading='FOR WOMEN' />
        <CardCarousal data={Womproducts} />
      </MainContainer>
      <FullBanner img={fullbanner} />
      <MainContainer>
        <HeadingStrip heading='FOR WOMEN' />
        <CardCarousal data={products} />
        <LogoCarousel />
      </MainContainer>
    </>
  )
}