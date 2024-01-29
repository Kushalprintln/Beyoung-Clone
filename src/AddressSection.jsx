import React from "react";
import styles from './AddressSection.module.css';
export default function AddressSection(){
    return (
        <div className={styles.addsection}>
            <div className={styles.address}>
                <h5>Kushal Sonkamble</h5>
                <div className={styles.lines}>
                    <p>This is the address line one</p>
                    <p>This is the address line two</p>
                </div>
            </div>
            <hr />
            <div className={styles.edit}>
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>
    )
}