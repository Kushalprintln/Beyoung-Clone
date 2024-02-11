// IMPORT REACT HOOKS AND CSS;
import React, { useContext, useState } from "react";
import styles from './LoginModal.module.css'

// IMPORT LOGIN IMAGE AND CONTEXT
import loginImg from '../images/login-and-signup-image.jpg';
import AuthContext from "./AuthContext";

// LOGINMODAL COMPONENT
export default function LoginModal({ purpose }) {
    // console.log('LOGIN-MODAL RENDERED');
    // AUTHENTICATION
    const Authentication = useContext(AuthContext);

    // LOGIN FORM AND SIGNUP FORM
    const [loginDetails, setLoginDetails] = useState(
        {
            email: "",
            password: "",
            appType: "ecommerce"
        }
    );
    const [signUpDetails, setSignUpDetails] = useState(
        {
            name: "",
            email: "",
            password: "",
            appType: "ecommerce"
        }
    );

    // REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const signupUrl = 'api/v1/user/signup';
    const loginUrl = 'api/v1/user/login';
    const getwish = 'api/v1/ecommerce/wishlist';
    const getcart = 'api/v1/ecommerce/cart';
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json' };

    // SIGNUP FUNCTION;
    async function SignUp() {
        const resp = await fetch(`${baseUrl}${signupUrl}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ ...signUpDetails })
        })
        const failmsg = await resp.json();
        if (resp.ok) {
            alert("SignUp Successful\n Please LogIn");
            clearSingInform();
            Authentication.loginmodal[1]('login');
        }
        else {
            alert(`${failmsg.message}\n Please LogIn`);
            clearSingInform();
            Authentication.loginmodal[1]('login');
        }
    }

    let token;
    // LOGIN FUNCTION;
    async function Login() {
        const resp = await fetch(`${baseUrl}${loginUrl}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ ...loginDetails })
        })
        const logindata = await resp.json();
        if (resp.ok) {
            alert("Login Successful");
            clearLogInform();
            Authentication.loginmodal[0](false);
            Authentication.status[1](true);
            Authentication.jws[1](logindata.token)
            token = logindata.token;
            Authentication.data[1]({ ...logindata.data });
            localStorage.setItem('user', JSON.stringify({ login: true, jws: logindata.token, info: JSON.stringify({ ...logindata.data }) }));
            getwishlist();
            getCartList();
        } else {
            alert(`${logindata.message}`);
            clearLogInform();
            Authentication.loginmodal[0](false);

        }
    }

    // GETTING WISHLIST ONCE LOGIN
    async function getwishlist() {
        // REQUIRMENTS;
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${getwish}`, {
            method: 'GET',
            headers: header,
        })
        const wishlist = await resp.json();
        // console.log(wishlist);
        if(wishlist.data){
            wishlist.data.items.map((ele) => {
                Authentication.wish[1](prev => [...prev, ele.products._id])
            })
        }
    }

    //  GETTING CARTLIST 
    async function getCartList() {
        const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
        const resp = await fetch(`${baseUrl}${getcart}`, {
            method: 'GET',
            headers: header,
        })
        const cartList = await resp.json();
        // console.log(cartList)
        if(cartList.data){
            Authentication.cart[1]({ ...cartList.data, results: cartList.results });
        }
    }

    // VALIDATION
    function execute(event) {
        event.preventDefault();
        if (purpose === "login") {
            if (loginDetails.email === '' || loginDetails.password === '') {
                alert('Invalid Input');
                return;
            }
            try {
                Login();
            } catch (e) {

            }
        } else {
            if (signUpDetails.name === '' || signUpDetails.email === '' || signUpDetails.password === '') {
                alert('Invalid Input');
                return;
            }
            try {
                console.log(JSON.stringify(signUpDetails))
                SignUp();
            } catch (e) {

            }
        }
    }

    // CLEARING INFOMATION OF THE FORM;
    function clearSingInform() {
        setLoginDetails(prev => { return { ...prev, name: "", email: "", password: "", } })
    }
    function clearLogInform() {
        setLoginDetails(prev => { return { ...prev, email: "", password: "", } })
    }
    return (
        <div className={styles.modalcontainer}>
            <div className={styles.modal}>
                <span className={styles.closemodal} onClick={() => { Authentication.loginmodal[0](false); Authentication.loginmodal[1]('login') }}>X</span>
                <img src={loginImg} alt="" />
                <form action="" className={styles.loginform}>
                    {purpose === "login" ? <h2>Login</h2> : <h2>Sign Up</h2>}
                    <p>Get Exciting Offers & Track Order</p>
                    {purpose === "login" ?
                        <>
                            <input type="email" value={loginDetails.email} id="email" placeholder="Email" onChange={(e) => { setLoginDetails(prev => { return { ...prev, email: e.target.value } }) }} />
                            <input type="password" value={loginDetails.password} id="password" placeholder="Password" onChange={(e) => { setLoginDetails(prev => { return { ...prev, password: e.target.value } }) }} />
                        </>
                        :
                        <>
                            <input type="name" value={signUpDetails.name} id="name" placeholder="Full Name" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, name: e.target.value } }) }} />
                            <input type="email" value={signUpDetails.email} id="email" placeholder="Email" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, email: e.target.value } }) }} />
                            <input type="password" value={signUpDetails.password} id="password" placeholder="Password" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, password: e.target.value } }) }} />
                        </>
                    }
                    <button className={styles.loginbtn} onClick={execute}>{purpose === "login" ? `Login` : `SignUp`}</button>
                </form>
                <span onClick={() => { Authentication.loginmodal[0](false); Authentication.loginmodal[1]('login') }}>Continue as Guest</span>
            </div>
        </div>
    )
}