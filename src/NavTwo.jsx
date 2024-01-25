import React, { useEffect, useState } from "react";
import styles from './NavTwo.module.css'
import image from '../images/beyonglogo.png'
import { CiSearch,CiHeart  } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function NavTwo(){
        const [scrolled,setScrolled] = useState(false);
        const [dropvis, setDropvis] = useState(false);
        const [sideBarVis, setsideBarVis] = useState(false);
        const [LoadFor, setLoadFor] = useState();
        const [sfor, setSfor] = useState('');
        const [selecedCat, setselCat] = useState('');
        const Mencat = ['hoodie','jeans','jogger','kurta','pyjamas','shirt','shorts','sweater','tracksuit','trouser','tshirt']
        const Womencat = ['jeans','jumpsuit','jogger','kurti','shirt','tshirt'];
        function logit() {
          if(window.scrollY > 1){
            setScrolled(true);
          }else{
            setScrolled(false);
          }
        }
        function LoadingFor(){
          if(window.innerWidth>480){
            setLoadFor('desktop')
          }
          else{
            setLoadFor('phone')
          }
        }
        function watchScroll() {
          window.addEventListener("scroll", logit);
          window.addEventListener("resize", LoadingFor);
        }
        useEffect(() => {
          watchScroll();
          LoadingFor();
          return () => {
            window.removeEventListener("scroll", logit);
            window.removeEventListener("resize", LoadingFor);
          };
        }, []);

    return (
      <>
        <div className={scrolled ? styles.fixed:styles.navtwo}>
            <div className={styles.container}>
                  {LoadFor==='phone' && <button className={styles.menubtn}><IoMenu size={"1.5em"} onClick={()=>{setsideBarVis(true)}}/></button>}
                <div className={styles.left}>
                    <Link to={''} style={{display:'flex'}}><img src={image} alt="BeyoungLogo" className={styles.logo} /></Link>
                    {LoadFor==='desktop' &&
                      <ul className={styles.menu}>
                        <Link to={`search/${sfor}`} style={{font:'inherit',color:'inherit',textDecoration:'none'}}><li onMouseOver={()=>{setDropvis(true),setSfor('Men'),setselCat(Mencat)}} onMouseOut={()=>{setDropvis(false)}}>MEN</li></Link>
                        <Link to={`search/${sfor}`} style={{font:'inherit',color:'inherit',textDecoration:'none'}}><li onMouseOver={()=>{setDropvis(true),setSfor('Women'),setselCat(Womencat)}} onMouseOut={()=>{setDropvis(false)}}>WOMEN</li></Link>
                        {/* {window.innerWidth>915 && <>
                          <li onMouseOver={()=>{setDropvis(true),setselCat(false)}} onMouseOut={()=>{setDropvis(false)}}>COMBO</li>
                          <li onMouseOver={()=>{setDropvis(true),setselCat(false)}} onMouseOut={()=>{setDropvis(false)}}>BB KE FAVOURITES</li>
                          <li onMouseOver={()=>{setDropvis(true),setselCat(false)}} onMouseOut={()=>{setDropvis(false)}}>WINTER WEARS</li>
                          <li onMouseOver={()=>{setDropvis(true),setselCat(false)}} onMouseOut={()=>{setDropvis(false)}}>NEW ARRIVALS</li>
                        </>
                        }  */}
                    </ul>
                    }
                </div>
                <div className={styles.right}>
                    <CiSearch size={"1.5em"} strokeWidth={'1'} />
                    <CiHeart size={"1.5em"} strokeWidth={'1'} />
                    <MdOutlineShoppingCart size={"1.5em"} />
                </div>
                {dropvis && <DropDown sfor={sfor} catagories={selecedCat} setvis={setDropvis}/>}
            </div>
        </div>
        {sideBarVis && <Sidebar close={setsideBarVis}/>}
      </>
    )
  }