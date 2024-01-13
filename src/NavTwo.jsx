import React, { useEffect, useState } from "react";
import styles from './NavTwo.module.css'
import image from '../images/beyonglogo.png'
import { CiSearch,CiHeart  } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
export default function NavTwo({catagories}){
        const [scrolled,setScrolled] = useState(false);
        const [dropvis, setDropvis] = useState(false);
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
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        useEffect(() => {
          watchScroll();
          return () => {
            window.removeEventListener("scroll", logit);
          };
        }, []);

    return (
        <div className={scrolled ? styles.fixed:styles.navtwo}>
            <div className={styles.container}>
                <div className={styles.left}>
                  {/* Have to link the logo with he home page. */}
                    <Link to={''} style={{display:'flex'}}><img src={image} alt="BeyoungLogo" className={styles.logo} /></Link>
                    <ul className={styles.menu}>
                        <li onMouseOver={()=>{setDropvis(true),setSfor('Men'),setselCat(Mencat)}} onMouseOut={()=>{setDropvis(false)}}><Link to={`search/${sfor}`} style={{font:'inherit',color:'inherit',textDecoration:'none'}}>MEN</Link></li>
                        <li onMouseOver={()=>{setDropvis(true),setSfor('Women'),setselCat(Womencat)}} onMouseOut={()=>{setDropvis(false)}}><Link to={`search/${sfor}`} style={{font:'inherit',color:'inherit',textDecoration:'none'}}>WOMEN</Link></li>
                        <li onMouseOver={()=>{setDropvis(true)}} onMouseOut={()=>{setDropvis(false)}}>JOGGERS</li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <CiSearch size={'1.5em'} strokeWidth={'1'} />
                    <CiHeart size={'1.5em'} strokeWidth={'1'} />
                    <MdOutlineShoppingCart size={'1.5em'} />
                </div>
                {dropvis && <DropDown sfor={sfor} catagories={selecedCat} visibility={dropvis} setvis={setDropvis}/>}
            </div>
        </div>
    )
}