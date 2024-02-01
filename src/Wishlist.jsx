import React, { useContext, useEffect, useState } from "react";
import styles from './Wishlist.module.css';
import empty from '../images/EMPTY-WISHLIST-PAGE.jpg'
import Homebtn from "./Homebtn";
import AuthContext from "./AuthContext";
import Wishcard from "./WishCard";
export default function Wishlist(){
    const Authentication = useContext(AuthContext);
    // console.log(Authentication);
    const [wishlist,setWishList] = useState([]);
    const localdata = JSON.parse(localStorage.getItem('user'));
    const token = localdata.jws;
    // console.log(token);
    async function getwishlist(){
        // REQUIRMENTS;
        const baseUrl = 'https://academics.newtonschool.co/';
        const getwish = 'api/v1/ecommerce/wishlist';
        const header = {projectID:'f104bi07c490','Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`};
        const resp = await fetch(`${baseUrl}${getwish}`,{
          method:'GET',
          headers:header,
        })
        console.log(resp);
        const wishlist = await resp.json();
        console.log(wishlist);
        wishlist.data.items.map((ele)=>{
            // console.log(ele.products);
            setWishList(prev => {return [...prev,ele.products]});
        })
      }

      useEffect(()=>{
        getwishlist();
      },[]);

    return (
    <div className={styles.wishlist}>
        <div className={styles.wishlistcontianer}>
            {wishlist.map((ele,idx)=>{
                return <Wishcard data={ele} key={idx} setwish={setWishList}/>
            })}
        </div>
        <div className={styles.empty}>
            {Authentication.wish[0].length === 0 && <img src={empty} alt="" />}
            <Homebtn text={'Continue Shopping'}/>
        </div>
    </div>
    )
}