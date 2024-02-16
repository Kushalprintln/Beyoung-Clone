import React from "react";
import styles from './OrderHistoryCard.module.css';
import { Link } from "react-router-dom";
export default function OrderHistoryCard({data}){
    return(
        <div className={styles.cartcard}>
            <Link to={`/${data.order.items[0].product._id}`} style={{ textDecoration: 'none' }}>
            <hr style={{ margin: '5px 0px' }} />
            <div className={styles.cardDetails}>
                <img src={data.order.items[0].product.displayImage} alt="" />
                <div className={styles.cardD}>
                    <p className={styles.heading}>{data.order.items[0].product.name}</p>
                    <div className={styles.pricedetails}>
                        <strong>&#x20B9; {data.order.items[0].product.price}</strong>
                    </div>
                    <p className={styles.heading} style={{opacity:0.5,marginTop:'5px'}}>DELIVERED AT :</p>
                    <div className={styles.qnp}>
                        <p><span>City :</span> {data.order.shipmentDetails.address.city}</p>
                        <p><span>Country :</span> {data.order.shipmentDetails.address.country}</p>
                        <p><span>State :</span> {data.order.shipmentDetails.address.state}</p>
                        <p><span>Street :</span> {data.order.shipmentDetails.address.street}</p>
                        <p><span>Zip-Code :</span> {data.order.shipmentDetails.address.zipCode}</p>
                    </div>
                </div>
            </div>
            <hr style={{ margin: '5px 0px' }} />
            </Link>
        </div>
    );
}