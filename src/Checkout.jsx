// IMPORTING REACT AND CSS
import React, { useContext, useState } from "react";
import styles from './Checkout.module.css';

// IMPORTING ROUTER HOOKS
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Bill from "./Bill";

// IMPORTING TRACKING IMAGES
import cartimg from '../images/Cart.png';
import shipping from '../images/address.png';
import paymentimg from '../images/payment.png';

// IMPORTING AUTH CONTEXT
import AuthContext from "./AuthContext";
import AddressContext from "./AddressContext";
import Address from "./Address";

// CHEKCOUT LAYOUT
export default function Checkout() {
    //  CHECKING THE PAGE
    const loc = useLocation();
    // console.log(loc.state)
    const stringArr = loc.pathname.split('/');
    const page = stringArr[2];
    console.log("page is", page);

    const naviagate = useNavigate();

    const Authentication = useContext(AuthContext);
    const token = Authentication.jws[0];

    function settingProgressImage() {
        if (page === 'cart') {
            return cartimg;
        } else if (page === 'shipping') {
            return shipping;
        } else {
            return paymentimg;
        }
    }
    // STATE FOR FROM DATA
    const [add, setAdd] = useState({
        "street": "",
        "city": "",
        "state": "",
        "country": "",
        "zipCode": ""
    });

    function Checkout() {
        console.log('clicked')
        if (page === 'cart') {
            naviagate('/checkout/shipping')
        } else if (page === 'shipping') {
            console.log("on the shipping page")
            console.log(add);
            if (add.street !== "" && add.city !== "" && add.state !== "" && add.country !== "" && add.zipCode !== "") {
                if (loc.state === null) {
                    naviagate('/checkout/payment')
                }
                naviagate('/checkout/payment', { state: loc.state })
            } else {
                alert("Improper address");
            }
        } else {
            console.log("on the payment page")
            Order();
            clearAdd();
        }
    }

    function clearAdd() {
        setAdd({
            "street": "",
            "city": "",
            "state": "",
            "country": "",
            "zipCode": ""
        })
    }


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
                    "productId": "652675ccdaf00355a78380f8",
                    "quantity": '2',
                    "addressType": "HOME",
                    "address": add
                }
            )
        })
        console.log(resp);
        if (resp.ok) {
            alert(`ORDER PLACED SUCCESSFULLY\nStreet : ${add.street} \nCity : ${add.city} \nState : ${add.state} \nCountry : ${add.country} \nZIP : ${add.zipCode}`)
            naviagate('/')
        }
        const order = await resp.json();
        // console.log(order);
    }

    return (
        <>
            <img src={settingProgressImage()} alt="" className={styles.progress} />
            <div className={styles.checkout}>
                <div className={styles.outletContainter}>
                    <AddressContext.Provider
                        value={[add, setAdd]}
                    >
                        <Outlet />
                    </AddressContext.Provider>
                </div>
                <div className={styles.billcontainer}>
                    <Bill execute={Checkout} />
                </div>
            </div>
        </>
    )
}