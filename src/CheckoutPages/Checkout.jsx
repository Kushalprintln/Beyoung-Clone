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

// IMPORTING AUTH CONTEXT
import AuthContext from "../Contexts/AuthContext";
import AddressContext from "../Contexts/AddressContext";
import Address from "../MyAccoutPages/Address";
import { ContactsOutlined } from "@mui/icons-material";

// CHEKCOUT LAYOUT
export default function Checkout() {
    //  CHECKING THE PAGE
    const loc = useLocation();
    // console.log(loc.state)
    const stringArr = loc.pathname.split('/');
    const page = stringArr[2];
    console.log("page is", page);

    const navigate = useNavigate();

    const Authentication = useContext(AuthContext);
    // console.log("this is in the chekcout",Authentication.cart[0].items);
    Authentication.cart[0].items.map((ele)=>{
        console.log(ele);
        console.log(ele.product._id);
        console.log(ele.quantity);
    })

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
        "phone":"",
        "street": "",
        "city": "",
        "state": "",
        "country": "",
        "zipCode": ""
    });

    // FORM ERRORS
    const[AddError,setAddError] = useState({
        phoneErr:'',
        streetErr:'',
        cityErr:'',
        stateErr:'',
        countryErr:'',
        zipErr:''
    })

    function phoneValidation(){
        let regex = /^\d{10}$/;
        if(add.phone === ''){
            setAddError(prev => ({...prev,phoneErr:'Please Enter a Valid Phone'}));
            return false;
        }else if(add.phone.length !== 10){
            setAddError(prev => ({...prev,phoneErr:'Phone No. Should Be 10 Digits'}));
            return false;
        }else if(!regex.test(add.phone)){
            setAddError(prev => ({...prev,phoneErr:'Should Contain Only Numbers'}));
            return false;
        }
        setAddError(prev => ({...prev,phoneErr:''}));
        return true;
    }

    function StreetValidation(){
        if(add.street === ''){
            setAddError(prev => ({...prev,streetErr:'Please Enter a Valid Street'}));
            return false;
        }else if(add.street.length < 3){
            setAddError(prev => ({...prev,streetErr:'Street must be greater than 3 character'}));
            return false;
        }
        setAddError(prev => ({...prev,streetErr:''}));
        return true;
    }

    function cityValidation(){
        if(add.city === ''){
            setAddError(prev => ({...prev,cityErr:'Please Enter a Valid City'}));
            return false;
        }else if(add.city.length < 2){
            setAddError(prev => ({...prev,cityErr:'City must be greater than 2 character'}));
            return false;
        }
        setAddError(prev => ({...prev,cityErr:''}));
        return true;
    }

    function stateValidation(){
        if(add.state === ''){
            setAddError(prev => ({...prev,stateErr:'Please Enter a Valid State'}));
            return false;
        }else if(add.state.length < 2){
            setAddError(prev => ({...prev,stateErr:'State must be greater than 2 character'}));
            return false;
        }
        setAddError(prev => ({...prev,stateErr:''}));
        return true;
    }

    function countryValidation(){
        if(add.country === ''){
            setAddError(prev => ({...prev,countryErr:'Please Enter a Valid Country'}));
            return false;
        }else if(add.country.length < 3){
            setAddError(prev => ({...prev,countryErr:'Country must be greater than 3 character'}));
            return false;
        }
        setAddError(prev => ({...prev,countryErr:''}));
        return true;
    }

    function zipvalidation(){
        let regex = /^\d{6}$/;
        if(add.zipCode === ''){
            setAddError(prev => ({...prev,zipErr:'Please Enter a Valid Zip'}));
            return false;
        }else if(add.zipCode.length !== 6){
            setAddError(prev => ({...prev,zipErr:'Zip Should Be 6 Digits'}));
            return false;
        }else if(!regex.test(add.zipCode)){
            console.log(add.zipCode)
            setAddError(prev => ({...prev,zipErr:'Zip Contain Only Numbers'}));
            return false;
        }
        setAddError(prev => ({...prev,zipErr:''}));
        return true;
    }

    function fromValidation(){
        phoneValidation();
        StreetValidation();
        cityValidation();
        stateValidation();
        countryValidation();
        zipvalidation();
        if(
            phoneValidation() &&
            StreetValidation() &&
            cityValidation() &&
            stateValidation() &&
            countryValidation() &&
            zipvalidation() 
        ){ return true}
        else{return false}
    }

    function Checkout() {
        console.log('clicked');
        if (page === 'cart') {
            navigate('/checkout/shipping')
        } else if (page === 'shipping') {
            // console.log("on the shipping page")
            if (fromValidation()) {
                if (loc.state === null) {
                    navigate('/checkout/payment');
                }
                console.log("cheking state in checkout",loc.state);
                navigate('/checkout/payment', { state: loc.state });
            }
        } else {
            // console.log("on t he payment page")
            console.log('In the last page',loc.state);
            if (loc.state === null) {
                console.log(Authentication.cart[0]);
                Authentication.cart[0].items.map((ele,idx)=>{
                    Order(ele.quantity,ele.product._id)
                })
                Emptycartitem();
            }
            else{
                Order(1,loc.state[1]);
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
    async function Order(quantity,productID) {
        // REQUIRMENTS;
        const baseUrl = 'https://academics.newtonschool.co/';
        const getwish = 'api/v1/ecommerce/order';
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${getwish}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(
                {
                    // "productId": loc.state ? loc.state[1] : "652675ccdaf00355a78380f8",
                    "productId": `${productID}`,
                    "quantity": `${quantity}`,
                    "addressType": "HOME",
                    "address": add
                }
            )
        })
        console.log(resp);
        if (resp.ok) {
            // alert(`ORDER PLACED SUCCESSFULLY\nStreet : ${add.street} \nCity : ${add.city} \nState : ${add.state} \nCountry : ${add.country} \nZIP : ${add.zipCode}`)
            Authentication.notify[0]("Order Placed Successfully");
            // Authentication.notify[0](loc.state[1]);
            navigate('/')
        }else{
            Authentication.notify[1]("Error While Place Order");
        }
        const order = await resp.json();
        console.log(order);
    }

        //REQUIRMENTS;
        
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
                Authentication.notify[1]("Cart Is now Empty");
                Authentication.cart[1]({ items: [] });
            }
        }

    // FOR NAVIGATING BACK TO HOME WHEN LOGGED OUT
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/');
        }
    }, [Authentication.status[0]]);

    return (
        <>
            <img src={settingProgressImage()} alt="" className={styles.progress} />
            <div className={styles.checkout}>
                <div className={styles.outletContainter}>
                    <AddressContext.Provider
                        value={
                        {address:[add, setAdd],
                        error:AddError
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
        </>
    )
}