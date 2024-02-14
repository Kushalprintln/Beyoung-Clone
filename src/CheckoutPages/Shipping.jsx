// IMPORTING REACT AND HOOKS AND CSS
import React, { useContext, useState } from "react";
import styles from './Shipping.module.css';

// IMPORTING AUTHENTICATION
import AuthContext from "../Contexts/AuthContext";
import AddressContext from "../Contexts/AddressContext";

// SHIPPING COMPONENT
export default function Shipping() {
  // INITILIZING CONTEXT AND TOKEN
  const Authentication = useContext(AuthContext);
  const token = Authentication.jws[0];
  const Address = useContext(AddressContext);
  console.log(Address);
  // console.log(Authentication.data[0].name);

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
            <input type="tel" value={Address.address[0].phone} placeholder="Phone" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, phone: e.target.value } }) }}/>
            {Address.error.phoneErr && <p>{Address.error.phoneErr}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input type="text" value={Address.address[0].street} placeholder="Street" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, street: e.target.value } }) }} />
            {Address.error.streetErr && <p>{Address.error.streetErr}</p>}
          </div>
        </div>
        <div className={styles.fromRow}>
          <div className={styles.inputContainer}>
            <input type="text" value={Address.address[0].city} placeholder="City" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, city: e.target.value } }) }} />
            {Address.error.cityErr && <p>{Address.error.cityErr}</p>}
          </div>
          <div className={styles.inputContainer}>
          <input type="text" value={Address.address[0].state} placeholder="State" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, state: e.target.value } }) }} />
          {Address.error.stateErr && <p>{Address.error.stateErr}</p>}
          </div>
        </div>
        <div className={styles.fromRow}>
          <div className={styles.inputContainer}>
          <input type="text" value={Address.address[0].country} placeholder="Country" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, country: e.target.value } }) }} />
          {Address.error.countryErr && <p>{Address.error.countryErr}</p>}
          </div>
          <div className={styles.inputContainer}>
          <input type="text" value={Address.address[0].zipCode} placeholder="Zip Code" onChange={(e) => { Address.address[1]((prev) => { return { ...prev, zipCode: e.target.value } }) }} />
          {Address.error.zipErr && <p>{Address.error.zipErr}</p>}
          </div>
        </div>
      </form>
    </div>
  )
}