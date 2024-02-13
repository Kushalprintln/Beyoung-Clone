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
  console.log(Authentication.data[0].name);

  return (
    <div className={styles.shipping}>
      <p className={styles.addheading}>Delivery Address</p>
      <form className={styles.addressform}>
        <div className={styles.fromRow}>
          <input type="text" placeholder="Full Name" value={Authentication.data[0].name} disabled style={{ textTransform: 'capitalize' }} />
          <input type="text" placeholder="Email" value={Authentication.data[0].email} disabled style={{ textTransform: 'capitalize' }} />
        </div>
        <div className={styles.fromRow}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Phone" />
            <p>This is the Error</p>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Street" onChange={(e) => { Address[1]((prev) => { return { ...prev, street: e.target.value } }) }} />
            <p>This is the error</p>
          </div>
        </div>
        <div className={styles.fromRow}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="City" onChange={(e) => { Address[1]((prev) => { return { ...prev, city: e.target.value } }) }} />
            <p>This is the Error</p>
          </div>
          <div className={styles.inputContainer}>
          <input type="text" placeholder="State" onChange={(e) => { Address[1]((prev) => { return { ...prev, state: e.target.value } }) }} />
          <p>This is the error</p>
          </div>
        </div>
        <div className={styles.fromRow}>
          <div className={styles.inputContainer}>
          <input type="text" placeholder="Country" onChange={(e) => { Address[1]((prev) => { return { ...prev, country: e.target.value } }) }} />
          <p>This is the error</p>
          </div>
          <div className={styles.inputContainer}>
          <input type="text" placeholder="Zip Code" onChange={(e) => { Address[1]((prev) => { return { ...prev, zipCode: e.target.value } }) }} />
          <p>This is the Error</p>
          </div>
        </div>
      </form>
    </div>
  )
}