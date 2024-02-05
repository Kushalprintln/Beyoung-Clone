// IMPORTING REACT, HOOKS AND CSS;
import React, { useContext } from "react";
import styles from './Cartcard.module.css';

// IMPORTING CONTEXT
import AuthContext from "./AuthContext";

// CARTCARD COMPONENT
export default function Cartcard({ data }) {
    // console.log(data)

    // INITILIZING CONTEXT AND TOKEN;
    const Authentication = useContext(AuthContext);
    const token = Authentication.jws[0];

    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const Addcart = `api/v1/ecommerce/cart/${data.product._id}`
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

    // DELET CART ITEM FUNCTION;
    async function deletcartitem() {
        const resp = await fetch(`${baseUrl}${Addcart}`, {
            method: 'DELETE',
            headers: header,
        })
        const cart = await resp.json();
        if (resp.ok) {
            Authentication.cart[1]({ ...cart.data });
        }
    }
    return (
        <div className={styles.cartcard}>
            <div className={styles.cardDetails}>
                <img src={data.product.displayImage} alt="" />
                <div className={styles.cardD}>
                    <p className={styles.heading}>{data.product.name}</p>
                    <p className={styles.sub}>{data.product.brand}</p>
                    <div className={styles.pricedetails}>
                        <strong>&#x20B9; {data.product.price}</strong>
                        <span className={styles.inc}>549</span>
                        <span className={styles.dis}>(75% Off)</span>
                    </div>
                    <p className={styles.save}>You Save<span>200.00</span></p>
                    <div className={styles.qnp}>
                    <p><span>Quantity :</span> {data.quantity}</p>
                    <p><span>Size :</span> {data.size}</p>
                    </div>
                </div>
            </div>
            <hr style={{ margin: '5px 0px' }} />
            <div>
                <button className={styles.remove} onClick={deletcartitem}>Remove</button>
            </div>
        </div>
    )
}