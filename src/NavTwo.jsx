import React, { useEffect, useState } from "react";
import styles from './NavTwo.module.css'
import image from '../images/beyonglogo.png'
import { CiSearch,CiHeart  } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSlash } from "react-icons/fa";
import DropDown from "./DropDown";
export default function NavTwo({catagories}){
        const [scrolled,setScrolled] = useState(false);
        const [dropvis, setDropvis] = useState(false);
        const [sfor, setSfor] = useState('');
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
                    <img src={image} alt="geyoungLogo" className={styles.logo} />
                    <ul className={styles.menu}>
                        <li onMouseOver={()=>{setDropvis(true),setSfor('Men')}} onMouseOut={()=>{setDropvis(false)}}>MEN</li>
                        <li onMouseOver={()=>{setDropvis(true),setSfor('Women')}} onMouseOut={()=>{setDropvis(false)}}>WOMEN</li>
                        <li onMouseOver={()=>{setDropvis(true)}} onMouseOut={()=>{setDropvis(false)}}>JOGGERS</li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <CiSearch size={'1.5em'} strokeWidth={'1'} />
                    <CiHeart size={'1.5em'} strokeWidth={'1'} />
                    <MdOutlineShoppingCart size={'1.5em'} />
                </div>
                {dropvis && <DropDown sfor={sfor} catagories={catagories} visibility={dropvis} setvis={setDropvis}/>}
            </div>
        </div>
    )
}