// IMPORTING REACT AND CSS
import React, { useContext, useEffect, useState } from "react";
import styles from './Checkout.module.css';

// IMPORTING ROUTER HOOKS
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Bill from "./Bill";

// IMPORTING TRACKING IMAGES
import cartimg from '../../images/Cart.png';
import shipping from '../../images/address.png';
import paymentimg from '../../images/payment.png';
import emptyCart from '../../images/EMPTY CARTORDER PAGE..png'

// IMPORTING AUTH CONTEXT
import AuthContext from "../Contexts/AuthContext";
import AddressContext from "../Contexts/AddressContext";
import Address from "../MyAccoutPages/Address";
import { ContactsOutlined } from "@mui/icons-material";
import Homebtn from "../Buttons/Homebtn";

// CHEKCOUT LAYOUT
export default function Checkout() {
    //  CHECKING THE PAGE
    const loc = useLocation();
    const stringArr = loc.pathname.split('/');
    const page = stringArr[2];
    console.log("we are on the ",page);

    const navigate = useNavigate();
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
        "phone": "",
        "street": "",
        "city": "",
        "state": "",
        "country": "",
        "zipCode": ""
    });

    // FORM ERRORS
    const [AddError, setAddError] = useState({
        phoneErr: '',
        streetErr: '',
        cityErr: '',
        stateErr: '',
        countryErr: '',
        zipErr: ''
    })

    // VALIDATION FUNCTION FOR EACH FORM INPUTS

    function phoneValidation() {
        let regex = /^\d{10}$/;
        if (add.phone === '') {
            setAddError(prev => ({ ...prev, phoneErr: 'Please Enter a Valid Phone' }));
            return false;
        } else if (add.phone.length !== 10) {
            setAddError(prev => ({ ...prev, phoneErr: 'Phone No. Should Be 10 Digits' }));
            return false;
        } else if (!regex.test(add.phone)) {
            setAddError(prev => ({ ...prev, phoneErr: 'Should Contain Only Numbers' }));
            return false;
        }
        setAddError(prev => ({ ...prev, phoneErr: '' }));
        return true;
    }

    function StreetValidation() {
        if (add.street === '') {
            setAddError(prev => ({ ...prev, streetErr: 'Please Enter a Valid Street' }));
            return false;
        } else if (add.street.length < 3) {
            setAddError(prev => ({ ...prev, streetErr: 'Street must be greater than 3 character' }));
            return false;
        }
        setAddError(prev => ({ ...prev, streetErr: '' }));
        return true;
    }

    function cityValidation() {
        if (add.city === '') {
            setAddError(prev => ({ ...prev, cityErr: 'Please Enter a Valid City' }));
            return false;
        } else if (add.city.length < 2) {
            setAddError(prev => ({ ...prev, cityErr: 'City must be greater than 2 character' }));
            return false;
        }
        setAddError(prev => ({ ...prev, cityErr: '' }));
        return true;
    }

    function stateValidation() {
        if (add.state === '') {
            setAddError(prev => ({ ...prev, stateErr: 'Please Enter a Valid State' }));
            return false;
        } else if (add.state.length < 2) {
            setAddError(prev => ({ ...prev, stateErr: 'State must be greater than 2 character' }));
            return false;
        }
        setAddError(prev => ({ ...prev, stateErr: '' }));
        return true;
    }

    function countryValidation() {
        if (add.country === '') {
            setAddError(prev => ({ ...prev, countryErr: 'Please Enter a Valid Country' }));
            return false;
        } else if (add.country.length < 3) {
            setAddError(prev => ({ ...prev, countryErr: 'Country must be greater than 3 character' }));
            return false;
        }
        setAddError(prev => ({ ...prev, countryErr: '' }));
        return true;
    }

    function zipvalidation() {
        let regex = /^\d{6}$/;
        if (add.zipCode === '') {
            setAddError(prev => ({ ...prev, zipErr: 'Please Enter a Valid Zip' }));
            return false;
        } else if (add.zipCode.length !== 6) {
            setAddError(prev => ({ ...prev, zipErr: 'Zip Should Be 6 Digits' }));
            return false;
        } else if (!regex.test(add.zipCode)) {
            setAddError(prev => ({ ...prev, zipErr: 'Zip Contain Only Numbers' }));
            return false;
        }
        setAddError(prev => ({ ...prev, zipErr: '' }));
        return true;
    }

    // FUNCTION FOR VALIDATING ALL THE FORM INPUTS
    function fromValidation() {
        phoneValidation();
        StreetValidation();
        cityValidation();
        stateValidation();
        countryValidation();
        zipvalidation();
        if (
            phoneValidation() &&
            StreetValidation() &&
            cityValidation() &&
            stateValidation() &&
            countryValidation() &&
            zipvalidation()
        ) { return true }
        else { return false }
    }

    // CHECKOUT FUNCTION WITH CONDITION FOR THE BILL CHECKOUT BUTTON
    function Checkout() {
        // IF THE USER IS ON THE CART PAGE, HE WILL GET NAVIGATED TO THE SHIPPING PAGE
        // IF THE CARD IS EMPTY BILL WONT BE SHOWN TO HIM/HER.
        if (page === 'cart') {
            navigate('/checkout/shipping');
        } 
        else if (page === 'shipping') {
        // ON THE SHIPPINNG PAGE AFTER THE FORM VALIDATION 
            if (fromValidation()) {
                // IF THIS PAGE IS NOT RECIEVING ANY STATE NAVIIGATE TO NEXT PAGE WITHOUT STATE
                if (loc.state === null) {
                    navigate('/checkout/payment');
                }
                navigate('/checkout/payment', { state: loc.state });
            }
        } else {
        // LOOPINNG ORDERS IF STATE IS NULL 
            if (loc.state === null) {
                Authentication.cart[0].items.map((ele, idx) => {
                    Order(ele.quantity, ele.product._id)
                })
                Emptycartitem();
            }
            else {
                Order(1, loc.state[1]);
            }
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
    async function Order(quantity, productID) {
        // REQUIRMENTS;
        const baseUrl = 'https://academics.newtonschool.co/';
        const getwish = 'api/v1/ecommerce/order';
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${getwish}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(
                {
                    "productId": `${productID}`,
                    "quantity": `${quantity}`,
                    "addressType": "HOME",
                    "address": add
                }
            )
        })
        if (resp.ok) {
            Authentication.notify[0]("Order Placed Successfully");
            navigate('/Thankyou')
        } else {
            Authentication.notify[1]("Error While Place Order");
        }
    }

    // DELET CART ITEM FUNCTION;
    async function Emptycartitem() {
        const baseUrl = 'https://academics.newtonschool.co/';
        const Addcart = `api/v1/ecommerce/cart/`
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${Addcart}`, {
            method: 'DELETE',
            headers: header,
        })
        const cart = await resp.json();
        if (resp.ok) {
            Authentication.cart[1]({ items: [] });
        }
    }

    // FOR NAVIGATING BACK TO HOME WHEN LOGGED OUT
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/');
        }
    }, [Authentication.status[0]]);

    if (page === 'cart' && Authentication.cart[0].items.length === 0) {
        return (
            <div className={styles.emptycart}>
                <img src={emptyCart} alt="" />
                <Homebtn text={'Continue Shopping'} />
            </div>
        )
    } else {
        return (
            <>
                <img src={settingProgressImage()} alt="" className={styles.progress} />
                <div className={styles.checkout}>
                    <div className={styles.outletContainter}>
                        <AddressContext.Provider
                            value={
                                {
                                    address: [add, setAdd],
                                    error: AddError
                                }
                            }
                        >
                            <Outlet />
                        </AddressContext.Provider>
                    </div>
                    <div className={styles.billcontainer}>
                        <Bill execute={Checkout} />
                    </div>
                </div>
                <button onClick={Emptycartitem}>Clear cart</button>
            </>
        )
    }
}