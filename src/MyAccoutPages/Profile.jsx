// IMPORTING REACT AND CSS
import React, { useContext } from "react";
import styles from './Profile.module.css';
import Initialslogo from "../NavigationBars/Initialslogo";

// AUTEHNTICATION CONTEXT
import AuthContext from "../Contexts/AuthContext";

// PROFILE COMPONENT
export default function Profile() {
    const Authentication = useContext(AuthContext);
    return (
        <div className={styles.profile}>
            <Initialslogo/>
            <section className={styles.infoSection}>
                <p className={styles.tag}>Name<span>*</span></p>
                <p className={styles.value}>{Authentication.data[0].name}</p>
            </section>
            <section className={styles.infoSection}>
                <p className={styles.tag}>Email<span>*</span></p>
                <p className={styles.value}>{Authentication.data[0].email}</p>
            </section>
            <section className={styles.infoSection}>
                <p className={styles.tag}>Date of Birth<span>*</span></p>
                <p className={styles.value}>07/08/1998</p>
            </section>
            <section className={styles.infoSection}>
                <p className={styles.tag}>Gender<span>*</span></p>
                <p className={styles.value}>Male</p>
            </section>
            <div className={styles.whatp}>
                <input type="checkbox" name="" id="whatap" checked style={{marginRight:'5px'}}/>
                <label htmlFor="whatap">I want to receive order updates on WhatsApp</label>
            </div>
            <button className={styles.save}>Save Changes</button>
        </div>
    )
}