// IMPORTING REACT AND CSS;
import React, { useContext, useState } from "react";
import styles from './Description.module.css';


// IMPORT ICON;
import Coloricon from "../Buttons/Coloricon";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// IMPORTING AUTHENTICATION
import AuthContext from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// DESCRIPTION COMPONENT
export default function Description({ data }) {
    const data1 = { ...data };
    // console.log(data1);

    // INITILIZING AUTHENTICATION
    const Authentication = useContext(AuthContext);
    const navigate = useNavigate();

    //SIZE AND QUANTITY;
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');

    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const addwishlist = 'api/v1/ecommerce/wishlist/';
    const Addcart = `api/v1/ecommerce/cart/${data1._id}`
    const deletwishlist = `api/v1/ecommerce/wishlist/${data1._id}`;
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${Authentication.jws[0]}` };
    const bod = { "productId": data1._id }

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
            Authentication.wish[1](prev => [...prev, data1._id]);
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
                return ele !== data1._id;
            })
            Authentication.wish[1](temp);
        }
    }

    // ADDING PRODUCT TO THE WISHLIST
    async function AddCart() {
        const resp = await fetch(`${baseUrl}${Addcart}`, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify({
                "quantity": quantity,
                "size": size
            }
            )
        })
        console.log(resp);
        const cart = await resp.json();
        console.log(cart);
        if (resp.ok) {
            Authentication.notify[0]("Added To Cart Successfully");
            Authentication.cart[1]({ ...cart.data });
            setSize('');
            setQuantity('');
        }else{
            // alert("Please signIn to Add Cart Item");
            Authentication.notify[1]("Error while Adding to Cart")
            setSize('');
            setQuantity('');
        }
    }

    // MANAGING WISHLIST (ADDING IF NOT AND VICE VERSA)
    function manageWish() {
        if (!Authentication.status[0]) {
            Authentication.loginmodal[0](true);
            return;
        }
        if (Authentication.wish[0].includes(data._id)) {
            removeFromWishlist();
        } else {
            addingWishlist();
        }
    }

    // ADDCART CHECK
    function addcart(){
        if (!Authentication.status[0]) {
            Authentication.loginmodal[0](true);
            return;
        }
        if(size === '' || quantity === ''){
            // alert("Select Size and Quantity");
            Authentication.notify[1]("Select Size And Quantity");
        }else{
            AddCart();
        }
    }

    function buynow(){
        if(Authentication.status[0]){
            navigate('/checkout/shipping',{state:[data.price,data._id]})
        }
        else{
            // alert("Please SignIn to Buy This Product");
            Authentication.loginmodal[0](true);
        }
    }

    return (
        <div className={styles.productdescription}>
            <div className={styles.desheading}>
                <h1>{data1.name}</h1>
                <div className={styles.heartico} onClick={manageWish}>
                    {Authentication.wish[0].includes(data1._id) ? <FavoriteOutlinedIcon style={{ color: '#ffdd00' }} /> : <FavoriteBorderOutlinedIcon />}
                </div>
            </div>
            <div className={styles.prodetails}>
                <span className={styles.typeof}>{data1.subCategory}</span>
                <span className={styles.pricetag}>
                    <strong>&#x20B9; {data1.price}</strong>
                    <small>₹ 2999</small>
                    <span>(60% off)</span>
                </span>
                <span className={styles.taxline}>Inclusive of All Taxes + Free Shipping</span>
                <span className={styles.discountline}>Extra ₹100 OFF on ₹999 (Code:BEYOUNG100)</span>
            </div>
            <div className={styles.colorselect}>
                <h1>COLOR : <span>{data1.color}</span></h1>
                <div className={styles.coloroption}>
                    {/* <Coloricon clr='red'/>
                    <Coloricon clr='blue'/>
                    <Coloricon clr='green'/> */}
                </div>
            </div>
            <div className={styles.sizeopt}>
                <span className={styles.sizeheading}>
                    <span className={styles.size}>SIZE</span>
                    <span className={styles.sizechart}>SIZE CHART</span>
                </span>
                <span className={styles.sizeoption}>
                    <span onClick={()=>{setSize('S')}} className={size === 'S' ? styles.selectedSize : styles.sizes}>S</span>
                    <span onClick={()=>{setSize('M')}} className={size === 'M' ? styles.selectedSize : styles.sizes}>M</span>
                    <span onClick={()=>{setSize('L')}} className={size === 'L' ? styles.selectedSize : styles.sizes}>L</span>
                    <span onClick={()=>{setSize('XL')}} className={size === 'XL' ? styles.selectedSize : styles.sizes}>XL</span>
                </span>
            </div>
            <div className={styles.qntoption}>QTY:
                <select value={quantity} id="" onChange={(e) => { setQuantity(e.target.value) }} className={styles.sizeSelect}>
                    <option value={''}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className={styles.buttons}>
                <button className={styles.cartbtn} onClick={addcart}>Add To Cart</button>
                <button className={styles.buybtn} onClick={buynow}>Buy Now</button>
            </div>
        </div>
    )
}