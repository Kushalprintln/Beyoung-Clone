// IMPORTING REACT AND HOOKS AND CSS
import React, { useContext } from "react";
import styles from './Shipping.module.css';

// IMPORTING AUTHENTICATION
import AuthContext from "./AuthContext";
import AddressContext from "./AddressContext";

// SHIPPING COMPONENT
export default function Shipping() {
  // INITILIZING CONTEXT AND TOKEN
  const Authentication = useContext(AuthContext);
  const token = Authentication.jws[0];
  const Address = useContext(AddressContext);
  // console.log(Address)

  return (
    <div className={styles.shipping}>
      <p className={styles.addheading}>Delivery Address</p>
      <form className={styles.addressform}>
        <div className={styles.fromRow}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
        </div>
        <div className={styles.fromRow}>
          <input type="text" placeholder="Phone"/>
          <input type="text" placeholder="Street" onChange={(e)=>{Address[1]((prev)=>{return {...prev,street:e.target.value}})}}/>
        </div>
        <div className={styles.fromRow}>
          <input type="text" placeholder="City" onChange={(e)=>{Address[1]((prev)=>{return {...prev,city:e.target.value}})}}/>
          <input type="text" placeholder="State" onChange={(e)=>{Address[1]((prev)=>{return {...prev,state:e.target.value}})}}/>
        </div>
        <div className={styles.fromRow}>
          <input type="text" placeholder="Country" onChange={(e)=>{Address[1]((prev)=>{return {...prev,country:e.target.value}})}}/>
          <input type="text" placeholder="Zip Code" onChange={(e)=>{Address[1]((prev)=>{return {...prev,zipCode:e.target.value}})}}/>
        </div>
      </form>
      {/* <button onClick={Order}>print data</button> */}
    </div>
  )
}