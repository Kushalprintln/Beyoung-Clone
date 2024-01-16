import React, { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import FullBanner from "./FullStripBanner";
import ProductContext from "./ProductContext";
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
import Display from "./Display";
import styles from './SearchPage.module.css'
import { useParams } from "react-router-dom";

const h = ['Hoodies for Men - ',
                'Jeans for Men - ',
                'Shirts for Men - ',
                'Shorts for Men - ',
                'Men Sweatshirts - ',
                'Gym Wear - ',
                'Trousers - ',
                'T Shirts - ',
                'Mens Clothing - ',]
const p = ['Mens Hoodies at Beyoung are made from rigorously sourced cotton fleece fabrics that are insanely soft and light on the skin. Explore our limited range of Hoodies for Men in stylish prints and exceptional comfort. Free Shipping & COD available on all Hoodies online at Beyoung.',
                'Buy Mens Jeans Online in India starting at only ₹998 at Beyoung. Explore Our latest premium quality collection of jeans. Enjoy a special ₹100 Off on selected Denim Jeans. Use coupon code "BEYOUNG100"',
                'However fashionable you are, you cannot deny how mens pajamas are true friends of comfort and style. So, Beyoung has brought to you a happening collection of pyjamas for men Online. Scroll below to have a look at this fabulous collection straight away. Free Shipping. COD Available.',
                'Buy trending shirts for men online in India starting at ₹675 at Beyoung. We offer a huge collection of 80+ mens shirts online. You can get ₹100 OFF on all best shirt for men when you spend more than ₹999, use the coupon code "BEYOUNG100". Free Shipping. COD Available.',
                'Summertime is all about fun in the sun and showing off your style, and what better way to do it than by upgrading your wardrobe with some stylish and comfortable men short. Whether you opt for vibrant colors, quirky prints, or a unique badge, shopping for men cotton shorts online will prove to be smooth from Beyoung at the best prices. Scroll down to check the never-seen-before collection of men shorts online. Free Shipping. COD Available.',
                "Buy the coziest Sweatshirts for Men online from Beyoung. You’ll find premium quality Mens Sweatshirt, from melting soft corduroys to smooth textured knits in the trendiest styles. These Swagtastic Men's Sweatshirt Online in India start from ₹699. Get Unlimited Free Shipping on Prepaid Orders.",
                'Buy Gym Printed Tracksuits Online in India at Beyoung.in. Shop an Exclusive Collection of 100% Cotton Gym Tracksuits online at the best price. Explore Beyoung’s Best Gym Tracks For Men.⭐Free Shipping ⭐COD.',
                'Flat 50% OFF! Beyoung offers highly functional, stylish, and comfortable Mens Cargo Pants at jaw-dropping discounts. We bring you an amazing collection of cargo pants that are as versatile as it’s appealing to the eyes. Specially designed for modern lifestyle and urban fashion, crafted from high-quality material, ensure durability and comfort throughout the day. ✅COD ✅Premium Quality ✅15 Days Easy Return',
                'Shop T shirts for men online from Beyoung’s diverse collections. You will love resonating with our premium quality Printed T Shirts available in various colors & interesting themes. We have different silhouettes to match your vibe and speak your style. Your one-stop everyday fashion brand Beyoung! Enjoy browsing and shopping online Mens T shirts starting from ₹299/-',
                'Nowadays, Jeggings For Women are the new trend instead of any ordinary apparel. All thanks to the sassy slim fit and unmatchable comfort. So, Beyoung has instigated a divine range of Women Jeggings Online all for you. Beat the fashion for the season with the stunning range available online. Scroll to know more. Free Shipping. COD Available.',
                'Get Your Hands on Trendy Cotton Kurti for Women - Buy designer women kurti online at affordable prices. Beyoung offers the latest collection of kurtas for women with exciting offers and discounts. Choose from a wide range of cotton kurta for women online.⭐Free Shipping ⭐COD - Available.',
                "Shop formal shirts for women online in India at Lowest Prices. Shop wide range of stylish shirts for women's from Beyoung. 1L+ designs sold and 10L+ Happy Customer. Buy an exclusive collection of 18+ Bestseller Women's Shirts Designs and Get Upto 57% OFF with Free Shipping and COD Available.",
                'Buy Women T Shirts Online in India at Best Prices. Shop Wide Range of Trendy T Shirts for Girls Online from Beyoung. 1L+ Designs Sold* 1 M+ Happy Customer* Collection of the 1000+ Bestseller T Shirt for Women Designs* Current Offer – Flat 50% OFF* ⭐Free Shipping & COD Available',
                "Get your hands on stylish and comfortable clothing for women - Buy a range of ladies' clothing online at affordable prices. Beyoung offers the latest collection of Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings with existing offers and discounts. Find women's clothing for formal to weekend outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days Return",
                'is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.',
]

export default function SearchPage(){
    const [banner,setBanner] = useState();
    const [heading,setHeading] = useState();
    const [pera,setPera] = useState();
    const [pageHeading,setPageHeading] = useState();
    const [SearchData, setSearchData] = useState([]);
    const [colorArr, setColrArr] = useState([]);
    const [sortAlgo,SetSortAlgo]= useState('');
    const params = useParams();
    let blankArr = [];
    const filter = JSON.stringify(params);

     // const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"${params.gender}","subCategory":"${params.subCategory}"}&limit=150`;
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${filter}&limit=50`;
    const header = {projectId:'f104bi07c490'};

    async function gettingData(){
        let searchResp = await fetch(URL,{
            method:'GET',
            headers: header
          });
        let searchData = await searchResp.json();
        setSearchData(searchData.data);
        searchData.data.map((obj)=>{
            if(!blankArr.includes(obj.color.toLowerCase())){
                blankArr.push(obj.color.toLowerCase());
            }
        })
        setColrArr(blankArr);
    }

    function SettingBanner(){
        if(params.subCategory === undefined){
            setPageHeading(`${params.gender}`)

        }else{
            setPageHeading(`${params.subCategory} FOR ${params.gender} `)
        }
        if(params.gender === 'Men'){
            if(params.subCategory === 'hoodie'){
                setBanner(MenHoodies);
                setHeading(h[0]);
                setPera(p[0]);
            }
            else if(params.subCategory === 'jeans'){
                setBanner(MenJeans);
                setHeading(h[1]);
                setPera(p[1]);
            }
            else if(params.subCategory === 'jogger'){
                setBanner(MenJoggers);
                setHeading('Jogger-');
                setPera(p[2]);
            }
            else if(params.subCategory === 'pyjamas'){
                setBanner(MenPajamas);
                setHeading('Pyjamas-');
                setPera(p[2]);
            }
            else if(params.subCategory === 'shirt'){
                setBanner(MenShirt);
                setHeading(h[2]);
                setPera(p[3]);
            }
            else if(params.subCategory === 'shorts'){
                setBanner(MenShorts);
                setHeading(h[3]);
                setPera(p[4]);
            }
            else if(params.subCategory === 'sweater'){
                setBanner(MenSweater);
                setHeading(h[4]);
                setPera(p[5]);
            }
            else if(params.subCategory === 'tracksuit'){
                setBanner(MenTrack);
                setHeading(h[5]);
                setPera(p[6]);
            }
            else if(params.subCategory === 'trouser'){
                setBanner(MenTrouser);
                setHeading(h[6]);
                setPera(p[7]);
            }
            else if(params.subCategory === 'tshirt'){
                setBanner(MenTshirt);
                setHeading(h[7]);
                setPera(p[8]);
            }else {
                setBanner(MenAll);
                setHeading(h[8]);
                setPera(p[14]);
            }

        }else{
            if(params.subCategory === 'jeans'){
                setBanner(WomenJeans);
                setHeading("Women's Jeans - ");
                setPera(p[9]);
            }
            else if(params.subCategory === 'jumpsuit' || params.subCategory === 'jogger'){
                setBanner(WomenClothing);
                setHeading("Women's Lowers - ");
                setPera(p[9]);
            }
            else if(params.subCategory === 'kurti'){
                setBanner(WomenKurti);
                setHeading("Women's Kurti - ");
                setPera(p[10]);
            }
            else if(params.subCategory === 'shirt'){
                setBanner(WomenShirt);
                setHeading("Women's Shirt - ");
                setPera(p[11]);
            }
            else if(params.subCategory === 'tshirt'){
                setBanner(WomenTshirt);
                setHeading("Women's T-Shirt - ");
                setPera(p[12]);
            }
            else {
                setBanner(WomenClothing);
                setHeading("Women's Clothing - ");
                setPera(p[13]);
            }
        }
    }

    function sort(){
        if(sortAlgo === 'ASD'){
            let arr = SearchData.sort((a,b)=>a.price-b.price);
            let temparr = [...arr];
            setSearchData(temparr);
        }
        else if(sortAlgo === 'DES'){
            let arr = SearchData.sort((a,b)=>b.price-a.price);
            let temparr = [...arr];
            setSearchData(temparr);
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        SettingBanner();
        gettingData();     
    },[params]);

    useEffect(()=>{
        sort();
    },[sortAlgo])

    return(
        <>
        <FullBanner img={banner}/>
        <MainContainer >
            <div className={styles.searchcontainer}>
            <ProductContext.Provider
            value={{data:SearchData,
                pageHeading:pageHeading,
                pera:pera,
                heading:heading,
                colors:colorArr,
                sortAlgoFun:SetSortAlgo,
            }}
            >
                <Filter/>
                <Display/>
            </ProductContext.Provider>
            </div>
        </MainContainer>
        </>
    )
}