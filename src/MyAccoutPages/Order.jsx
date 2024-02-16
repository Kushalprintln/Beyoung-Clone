// IIMPORTING REACT AND CSS;
import React, { useContext, useEffect, useState } from "react";
import styles from './Order.module.css';

// IMPROTING IMAGES 
import empty from '../../images/empty.gif'
import add from '../../images/AddImage.png'

// IMPORTING OTHER COMPONET
import Homebtn from "../Buttons/Homebtn";

// CONTEXT
import AuthContext from "../Contexts/AuthContext";
import OrderHistoryCard from "../Cards/OrderHistoryCard";

// ORDER COMPONENT
export default function Order() {

    const[orderHistory,setOrderHistory] = useState([]);

    const Authentication = useContext(AuthContext);
    const token = Authentication.jws[0];

    async function OrderHistory(){
        const baseUrl = 'https://academics.newtonschool.co/';
        const OrderHistory = 'api/v1/ecommerce/order/'
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${OrderHistory}`, {
            method: 'GET',
            headers: header,
        })
        const orderHis = await resp.json();
        if(resp.ok){
            setOrderHistory(orderHis.data);
        }
    }

    useEffect(()=>{
        OrderHistory();
    },[Authentication.jws[0]])
    return (
        <div className={styles.order}>
            {orderHistory.length === 0 ?
            <div className={styles.empty}>
                <img src={empty} alt="" />
                <p className={styles.emptyheading}>Haven't ordered yet?</p>
                <p>Explore and shop the coolest fashion now!</p>
            </div> :
            orderHistory.map((ele,idx)=>{
              return <OrderHistoryCard data={ele} key={idx}/>
            })
            }
            <div>
                <img src={add} alt="" />
                <Homebtn text={'Continue Shopping'} />
            </div>
        </div>
    )
}