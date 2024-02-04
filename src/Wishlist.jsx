// IMPORTING REACT, STYLES HOOKS 
import React, { useContext, useEffect, useState } from "react";
import styles from './Wishlist.module.css';

// EMPTY WISHLIST IMAGE
import empty from '../images/EMPTY-WISHLIST-PAGE.jpg'

// IMPORTING OTHER COMPONENTS
import Homebtn from "./Homebtn";
import AuthContext from "./AuthContext";
import Wishcard from "./WishCard";
import SizeModal from "./SizeModal";

// IMPORTING ROUTER HOOKS
import { useNavigate } from "react-router-dom";

// WISHLIST COMPONENT
export default function Wishlist() {
    // INITIALLIZING CONTEXT AND NAVIGATION
    const Authentication = useContext(AuthContext);
    const navigate = useNavigate();

    // DECLEARING STATE FOR WISHLIST ARRAY 
    const [wishlist, setWishList] = useState([]);
    const [product, setProduct] = useState();
    const [modalvisiable, setmodalvis] = useState(false);

    // GETTING TOKEN FROM THE CONTEXT
    const token = Authentication.jws[0];

    // GETTING WISHLIST FUNCTION
    async function getwishlist() {
        // REQUIRMENTS;
        const baseUrl = 'https://academics.newtonschool.co/';
        const getwish = 'api/v1/ecommerce/wishlist';
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${getwish}`, {
            method: 'GET',
            headers: header,
        })
        const wishlist = await resp.json();;
        setWishList([]);
        wishlist.data.items.map((ele) => {
            setWishList(prev => { return [...prev, ele.products] });
        })
    }

    useEffect(() => {
        if (!Authentication.status[0]) {
            navigate('/');
        } else {
            getwishlist();
        }
    }, [Authentication.status[0]]);

    return (
        <div className={styles.wishlist}>
            <div className={styles.wishlistcontianer}>
                {wishlist.map((ele, idx) => {
                    return <Wishcard data={ele} key={idx} setwish={setWishList} product={setProduct} modal={setmodalvis} />
                })}
                {modalvisiable && <SizeModal product={product} close={setmodalvis} />}
            </div>
            <div className={styles.empty}>
                {Authentication.wish[0].length === 0 && <img src={empty} alt="" />}
                <Homebtn text={'Continue Shopping'} />
            </div>
        </div>
    )
}