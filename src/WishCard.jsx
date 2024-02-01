import React, { useContext } from "react";
import styles from './WishCard.module.css';
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import dumimg from '../images/cards.jpg'
import AuthContext from "./AuthContext";
export default function Wishcard({data,setwish}){
    // console.log(setwish);
    const Authentication = useContext(AuthContext);

    const discount = Math.floor(Math.random()*(70 - 50 + 1) ) + 50;
    const inc = 100-discount;
    const incPrice = Math.floor((data.price*100)/inc);
    const localdata = JSON.parse(localStorage.getItem('user'));
    const token = localdata.jws;
    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const addwishlist = 'api/v1/ecommerce/wishlist/';
    const deletwishlist = `api/v1/ecommerce/wishlist/${data._id}`;
    const header = {projectID:'f104bi07c490','Content-Type': 'application/json','Authorization': `Bearer ${token}`};
    const bod = {"productId" : data._id}

    async function removeFromWishlist(){
        const resp = await fetch(`${baseUrl}${deletwishlist}`,{
            method:'DELETE',
            headers:header, 
        })
        console.log(resp);
        const delwish = await resp.json();
        console.log(delwish);
        let tempArray = [];
        delwish.data.items.map((ele)=>{
            // console.log(ele.products);
            tempArray.push(ele.products);
        })
        setwish(tempArray);

        if(resp.ok){
            let temp = Authentication.wish[0].filter((ele)=>{
               return ele !== data._id;
            })
            Authentication.wish[1](temp);
        }
    }

    return (
        <div className={styles.card} >
            <span className={styles.cardlike} onClick={removeFromWishlist}>
                X
            </span>
            <Link to={`/${data._id}`}  style={{textDecoration:'none'}}>
            <img src={data.displayImage}/>
            <div className={styles.details}>
                <p className={styles.hed}>{data.name}</p>
                <p className={styles.cat}>somethng</p>
                <p className={styles.price}>
                    <span className={styles.pp}>&#x20B9;{data.price}</span> 
                    <span className={styles.sm}>{incPrice}</span>
                    <span className={styles.st}>{`(${discount}%0ff)`}</span>
                </p>
            </div>
            </Link>
            <div>
            <button className={styles.addcart}><LocalMallOutlinedIcon fontSize="2em" style={{marginRight:'3px'}}/> Add to Cart</button>
            </div>
        </div>
    )
}