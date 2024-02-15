// IMPORTING REACT AND STYLES
import React from "react";
import styles from './Card.module.css';

// IIMPORTING DUMMY IMAGE AND ERROR IMAGE FOR ERROR HANDELING
import bbimg from '../../images/full-sleeve-image-bb.jpg';
import error from '../../images/imgNotFound.png'

// IMPORTING REACT AND ROUTER HOOKS
import { useContext } from "react";
import { Link } from "react-router-dom";

// IMPORTING CONTEXT
import AuthContext from "../Contexts/AuthContext";

// IMPORTING ICONS FROM MATERIAL UI
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

//TOSTE FROM TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CARD COMPONENT
export default function Card({ br, data }) {
    // DESTRUCTURING DATA;
    const product = { ...data };

    // INITIALIZING AUTHENTICATION CONTEXT;
    const Authentication = useContext(AuthContext);
    // console.log(Authentication.wish);

    // CREATING INLINE CSS IF BR IS TRUE
    const brstyle = { border: '1px solid rgba(0, 0, 0, 0.4)', borderRadius: '15px' }

    // SETTING DISCOUNT
    let discount = Math.floor(Math.random() * (70 - 50 + 1)) + 50;
    let inc = 100 - discount;
    let incPrice = Math.floor((product.price * 100) / inc);

    // IMAGE ERROR HANDELING
    function handelingErroImag(e) {
        e.target.src = error;
    }

    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const addwishlist = 'api/v1/ecommerce/wishlist/';
    const deletwishlist = `api/v1/ecommerce/wishlist/${product._id}`;
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${Authentication.jws[0]}` };
    const bod = { "productId": product._id }

    // ADDING WISHLIST;
    async function addingWishlist() {
        const resp = await fetch(`${baseUrl}${addwishlist}`, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify({ ...bod })
        })
        const addwish = await resp.json();
        if (resp.ok) {
            Authentication.notify[0]("Added To WishList");
            Authentication.wish[1](prev => [...prev, product._id]);
        }
    }

    // REMOVING PRODUCT FORM WISHLIST
    async function removeFromWishlist() {
        const resp = await fetch(`${baseUrl}${deletwishlist}`, {
            method: 'DELETE',
            headers: header,
        })
        console.log(resp);
        const delwish = await resp.json();
        console.log(delwish);
        if (resp.ok) {
            Authentication.notify[2]("Removed From WishList");
            let temp = Authentication.wish[0].filter((ele) => {
                return ele !== product._id;
            })
            Authentication.wish[1](temp);
        }
    }

    // MANAGING WISHLIST (ADDING IF NOT AND VICE VERSA)
    function manageWish() {
        if (!Authentication.status[0]) {
            Authentication.loginmodal[0](true);
            return;
        }
        if (Authentication.wish[0].includes(product._id)) {
            removeFromWishlist();
        } else {
            addingWishlist();
        }
    }

    // CARD COMPONENT IF TRUE DATA;
    if (data) {
        return (
            <div className={styles.card} style={br && brstyle}>
                {!br && <span className={styles.cardlike} onClick={manageWish}>
                    {Authentication.wish[0].includes(product._id) ? <FavoriteOutlinedIcon style={{ color: '#ffdd00' }} /> : <FavoriteBorderOutlinedIcon />}
                </span>}
                <Link to={`/${product._id}`} state={{ discount: discount, incPrice: incPrice }} style={{ textDecoration: 'none' }}>
                    <img src={product.displayImage ? `${product.displayImage}` : error} alt={product.name} onError={handelingErroImag} />
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
    else {
        // RETURNING DUMMY CARD OF NO DATA;
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