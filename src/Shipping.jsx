// IMPORTING REACT AND HOOKS AND CSS
import React, { useContext } from "react";
import styles from './Shipping.module.css';

// iMPORTING BILL COMPONENT
import Bill from "./bill";

// IMPORTING IMAGE
import add from '../images/address.png'

// IMPORTING AUTHENTICATION
import AuthContext from "./AuthContext";

// SHIPPING COMPONENT
export default function Shipping() {
  // INITILIZING CONTEXT AND TOKEN
  const Authentication = useContext(AuthContext);
  const token = Authentication.jws[0];

  // PLACING ORDER FUNCTION
  async function Order() {
    // REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const getwish = 'api/v1/ecommerce/order';
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
    const resp = await fetch(`${baseUrl}${getwish}`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(
        {
          "productId": '65be398715896806432af7cf',
          "quantity": 2,
          "addressType": "HOME",
          "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "country": "USA",
            "zipCode": "12345"
          }
        }
      )
    })
    const order = await resp.json();
    console.log(order);
  }

  return (
    <div className={styles.shipping}>
      <img src={add} alt="" />
      <div className={styles.shippingcontainer}>
        <div className={styles.formcontainer}>

        </div>
        <div className={styles.billContainer}>
          <Bill order={Order} />
        </div>
      </div>
    </div>
  )
}