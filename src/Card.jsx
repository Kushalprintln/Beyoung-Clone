import React, { useContext } from "react";
import styles from './Card.module.css';
import bbimg from '../images/full-sleeve-image-bb.jpg';
import error from '../images/imgNotFound.png'
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function Card({br,data}){
    const product = {...data};
    const brstyle = {border:'1px solid rgba(0, 0, 0, 0.4)',borderRadius:'15px'}
    const discount = Math.floor(Math.random()* (70 - 50 + 1) ) + 50;
    const inc = 100-discount;
    const incPrice = Math.floor((product.price*100)/inc);

    const Authentication = useContext(AuthContext);

    function handelingErroImag(e){
        e.target.src = error;
    }
    // ADDING WISHLIST;
    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const addwishlist = 'api/v1/ecommerce/wishlist/';
    const loginUrl = 'api/v1/user/login';
    const header = {projectID:'f104bi07c490','Content-Type': 'application/json','Authorization': `Bearer ${Authentication.jws[0]}`};
    const bod = { "productId" : product._id}

    async function addingWishlist(){
        const resp = fetch(`${baseUrl}${addwishlist}`,{ 
            method:'PATCH',
            headers:header, 
            body: JSON.stringify({...bod})
        })


    }

    if(data){
        return (
            <Link to={`/${product._id}`} state={{discount:discount,incPrice:incPrice}} style={{textDecoration:'none'}}>
            <div className={styles.card} style={br && brstyle}>
                <img src={product.displayImage ? `${product.displayImage}` : error} alt={product.name} onError={handelingErroImag}/>
                {!br && <span className={styles.cardlike} onClick={addingWishlist}>
                    <FavoriteBorderOutlinedIcon />
                </span>}
                <div className={styles.details}>
                    <p className={styles.hed}>{product.name}</p>
                    <p className={styles.cat}>{product.subCategory}</p>
                    <p className={styles.price}>
                        <span className={styles.pp}>&#x20B9; {product.price}</span> 
                        <span className={styles.sm}>{incPrice}</span>
                        <span className={styles.st}>{`(${discount}%0ff)`}</span>
                    </p>
                </div>
            </div>
            </Link>
        )
    }
    else{
        //returning dummy card if no data
        return (
            <div className={styles.card}>
                <img src={bbimg} alt="fullslieveimg" />
                <div className={styles.details}>
                    <p className={styles.hed}>Sand Brown Solid Urban Shirt for Men</p>
                    <p className={styles.cat}>Urban Shirts</p>
                    <p className={styles.price}>
                        <span className={styles.pp}>&#x20B9; 1499</span> 
                        <span className={styles.sm}>2000</span>
                        <span className={styles.st}>(50%0ff)</span>
                    </p>
                </div>
            </div>
        )
    }
}