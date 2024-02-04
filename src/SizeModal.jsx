// IMPORTING REACT, STYLES AND HOOKS
import React, { useContext, useState } from "react";
import styles from './SizeModal.module.css';

// IMPORTING MUI ICONS
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

// IMPORTING CONTEXT
import AuthContext from "./AuthContext";

// SIZEMODAL COMPONENT
export default function SizeModal({ product, close }) {
    // INITIALLIZING CONTEXT
    const Authentication = useContext(AuthContext);

    //SIZE AND QUANTITY;
    const [size, setSize] = useState('S');
    const [quantity, setQuantity] = useState(1);

    // FUNCTION FOR CLOSING MODAL
    function closemodal() {
        close(false);
    }

    // GETTING TOKEN FROM LOCALSTORAGE
    const localdata = JSON.parse(localStorage.getItem('user'));
    const token = localdata.jws;

    //REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const Addcart = `api/v1/ecommerce/cart/${product._id}`
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
    const bod = { "productId": product._id }

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
            Authentication.cart[1]({ ...cart.data });
        }
    }

    // ADDING AND CLOSING MODAL FUNCTION
    function addAndClose() {
        AddCart();
        closemodal();
    }

    return (
        <div className={styles.modalcontainer}>
            <div className={styles.sizemodal} >
                <span className={styles.cardlike} onClick={closemodal}>
                    X
                </span>
                <img src={product.displayImage} alt="" />
                <div className={styles.selectsize}>
                    <div className={styles.selection}>
                        <label htmlFor="">Quantity </label>
                        <select value={quantity} id="" onChange={(e) => { setQuantity(e.target.value) }}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label htmlFor="">Size </label>
                        <select value={size} id="" onChange={(e) => { setSize(e.target.value) }}>
                            <option value={'S'}>S</option>
                            <option value={'M'}>M</option>
                            <option value={'L'}>L</option>
                            <option value={'XL'}>XL</option>
                        </select>
                    </div>
                </div>
                <button className={styles.addcart} onClick={addAndClose} ><LocalMallOutlinedIcon fontSize="2em" style={{ marginRight: '3px' }} /> Add to Cart</button>
            </div>
        </div>
    )
}