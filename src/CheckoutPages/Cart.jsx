// IMPORTING REACT, HOOKS AND STYLES
import React, { useContext, useEffect } from "react";
import styles from './Cart.module.css'

// IMPORTING OTHER COMPONENTS;
import cart from '../../images/Cart.png'
import Cartcard from "../Cards/Cartcard";

// IMPORTING CONTEXT;
import AuthContext from "../Contexts/AuthContext";

// CART COMPONENT
export default function Cart() {
    const Authentication = useContext(AuthContext);
    // console.log(Authentication);
    // console.log(Authentication.cart[0].items);
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!Authentication.status[0]){
    //         navigate('/');
    //         // console.log('navigating back');
    //     }
    //   },[Authentication.status[0]]);

    return (
        <div className={styles.cart}>
            {
                Authentication.cart[0].items.map((ele, idx) => {
                    return <Cartcard data={ele} key={idx} />
                })
            }
        </div>
    )
}