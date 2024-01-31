import React, { useContext } from "react";
import styles from './Card.module.css';
import bbimg from '../images/full-sleeve-image-bb.jpg';
import error from '../images/imgNotFound.png'
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'; 

//TOSTE
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card({br,data}){
    const product = {...data};
    const brstyle = {border:'1px solid rgba(0, 0, 0, 0.4)',borderRadius:'15px'}
    const discount = Math.floor(Math.random()*(70 - 50 + 1) ) + 50;
    const inc = 100-discount;
    const incPrice = Math.floor((product.price*100)/inc);

    const Authentication = useContext(AuthContext);
    // console.log(Authentication.wish);

    function handelingErroImag(e){
        e.target.src = error;
    }
    // ADDING WISHLIST;
    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const addwishlist = 'api/v1/ecommerce/wishlist/';
    const deletwishlist = `api/v1/ecommerce/wishlist/${product._id}`;
    const header = {projectID:'f104bi07c490','Content-Type': 'application/json','Authorization': `Bearer ${Authentication.jws[0]}`};
    const bod = {"productId" : product._id}

    async function addingWishlist(){
        const resp = await fetch(`${baseUrl}${addwishlist}`,{
            method:'PATCH',
            headers:header, 
            body: JSON.stringify({...bod})
        })
        console.log(resp);
        const addwish = await resp.json();
        console.log(addwish);
        if(resp.ok){
            Authentication.wish[1](prev=>[...prev,product._id]);
            // toast.success('🦄 Wow so easy!', {
            //     position: "bottom-center",
            //     autoClose: 1500,
            //     hideProgressBar: false,
            //     closeOnClick: false,
            //     pauseOnHover: false,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     // transition: Zoom,
            //     });
        }
    }
    async function removeFromWishlist(){
        const resp = await fetch(`${baseUrl}${deletwishlist}`,{
            method:'DELETE',
            headers:header, 
        })
        console.log(resp);
        const delwish = await resp.json();
        console.log(delwish);
        if(resp.ok){
            let temp = Authentication.wish[0].filter((ele)=>{
               return ele !== product._id;
            })
            Authentication.wish[1](temp);
        }
    }

    function manageWish(){
        if(Authentication.wish[0].includes(product._id)){
            removeFromWishlist();
            
        }else{
            addingWishlist();
        }
    }

    if(data){
        return (
            <div className={styles.card} style={br && brstyle}>
                {!br && <span className={styles.cardlike} onClick={manageWish}>
                    {Authentication.wish[0].includes(product._id) ? <FavoriteOutlinedIcon style={{color:'#ffdd00'}}/> : <FavoriteBorderOutlinedIcon /> }
                    {/* { <FavoriteBorderOutlinedIcon /> } */}
                </span>}
                <Link to={`/${product._id}`} state={{discount:discount,incPrice:incPrice}} style={{textDecoration:'none'}}>
                <img src={product.displayImage ? `${product.displayImage}` : error} alt={product.name} onError={handelingErroImag}/>
                <div className={styles.details}>
                    <p className={styles.hed}>{product.name}</p>
                    <p className={styles.cat}>{product.subCategory}</p>
                    <p className={styles.price}>
                        <span className={styles.pp}>&#x20B9; {product.price}</span> 
                        <span className={styles.sm}>{incPrice}</span>
                        <span className={styles.st}>{`(${discount}%0ff)`}</span>
                    </p>
                </div>
            </Link>
            {/* <ToastContainer /> */}
            </div>
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