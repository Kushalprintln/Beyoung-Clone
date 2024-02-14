// IMPORT REACT HOOKS AND CSS;
import React, { useContext, useState } from "react";
import styles from './LoginModal.module.css'

// IMPORT LOGIN IMAGE AND CONTEXT
import loginImg from '../../images/login-and-signup-image.jpg';
import AuthContext from "../Contexts/AuthContext";

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
    const [fromErrors,setFormErrors] = useState({
        name:false,
        email:false,
        pass:false,
        nameError:'Please Enter a Valid Name',
        emailError:'Please Enter a Valid Email',
        passError:'Please Enter a Valid Password'
    })

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
            // alert("SignUp Successful\n Please LogIn");
            Authentication.notify[0]("SignUp Successful");
            clearSingInform();
            resetErroes();
            Authentication.loginmodal[1]('login'); 
        }
        else {
            // alert(`${failmsg.message}\n Please LogIn`);
            Authentication.notify[1](`${failmsg.message}\n Please LogIn`);
            clearSingInform();
            resetErroes();
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
            // alert("Login Successful");
            Authentication.notify[0]("Login Successful");
            clearLogInform();
            resetErroes();
            Authentication.loginmodal[0](false);
            Authentication.status[1](true);
            Authentication.jws[1](logindata.token)
            token = logindata.token;
            Authentication.data[1]({ ...logindata.data });
            localStorage.setItem('user', JSON.stringify({ login: true, jws: logindata.token, info: JSON.stringify({ ...logindata.data }) }));
            getwishlist();
            getCartList();
        } else {
            // alert(`${logindata.message}`);
            Authentication.notify[1](`${logindata.message}`);
            clearLogInform();
            resetErroes();
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

    // FORM VALIIDATION FOR LOGIN
    function loginEmailValidation(){
        if(loginDetails.email === ''){
            setFormErrors(prev => {return {...prev,email:true}});
            return false;
        }
        else if(!loginDetails.email.includes('@')){
            setFormErrors(prev => {return {...prev,email:true,emailError:"Email Should Contain @"}})
            return false;
        }
        setFormErrors(prev => {return {...prev,email:false}});
        return true;
    }
    function loginPassValidation(){
        if(loginDetails.password === ''){
            setFormErrors(prev => {return {...prev,pass:true}});
            return false;
        }
        else if(loginDetails.password.length < 4 || loginDetails.password.length > 12){
            setFormErrors(prev => {return {...prev,pass:true,passError:'Password must be between 4 to 12 character'}});
            return false;
        }
        setFormErrors(prev => {return {...prev,pass:false}});
        return true;
    }
    function loginValidation(){
        loginEmailValidation();
        loginPassValidation();
        if(loginEmailValidation() && loginPassValidation()){
            return true;
        }else{
            return false;
        }
    }
//   FORM VALIDATION FOR SIGNUP
    function signUpNameValidation(){
        if(signUpDetails.name === ''){
            setFormErrors(prev => {return {...prev,name:true}});
            return false;
        }else if(signUpDetails.name.length < 4){
            setFormErrors(prev => {return {...prev,name:true,nameError:'Name must be more than 4 character'}});
            return false;
        }
        setFormErrors(prev => {return {...prev,name:false}});
        return true;
    }

    function signUpEmailValidation(){
        if(signUpDetails.email === ''){
            setFormErrors(prev => {return {...prev,email:true}});
            return false;
        }
        else if(!signUpDetails.email.includes('@')){
            setFormErrors(prev => {return {...prev,email:true,emailError:"Email Should Contain @"}})
            return false;
        }
        setFormErrors(prev => {return {...prev,email:false}});
        return true;
    }

    function signUpPassValidation(){
        if(signUpDetails.password === ''){
            setFormErrors(prev => {return {...prev,pass:true}});
            return false;
        }
        else if(signUpDetails.password.length < 4 || signUpDetails.password.length > 12){
            setFormErrors(prev => {return {...prev,pass:true,passError:'Password must be between 4 to 12 character'}});
            return false;
        }
        setFormErrors(prev => {return {...prev,pass:false}});
        return true;
    }

    function signUpValidation(){
        signUpNameValidation();
        signUpEmailValidation();
        signUpPassValidation();
        if(signUpNameValidation() && signUpEmailValidation() && signUpPassValidation()){
            return true;
        }else{
            return false;
        }
    }

    // EXECUTE
    function execute(event) {
        event.preventDefault();
        if (purpose === "login") {
            if (loginValidation()) {
                try {
                    Login();
                } catch (e) {
    
                }
            }else{

            }
            
        } else {
            if(signUpValidation()){
                try {
                    console.log(JSON.stringify(signUpDetails))
                    SignUp();
                } catch (e) {
    
                }
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
    function resetErroes(){
        setFormErrors({
        name:false,
        email:false,
        pass:false,
        nameError:'Please Enter a Valid Name',
        emailError:'Please Enter a Valid Email',
        passError:'Please Enter a Valid Password'
        })
    }
    return (
        <div className={styles.modalcontainer}>
            <div className={styles.modal}>
                <span className={styles.closemodal} onClick={() => { Authentication.loginmodal[0](false); Authentication.loginmodal[1]('login') }}>X</span>
                <img src={loginImg} alt="" />
                <form action="" className={styles.loginform}>
                    {purpose === "login" ? <h2>Login</h2> : <h2>Sign Up</h2>}
                    <p className={styles.offer}>Get Exciting Offers & Track Order</p>
                    {purpose === "login" ?
                        <>
                            <input type="email" value={loginDetails.email} id="email" placeholder="Email" onChange={(e) => { setLoginDetails(prev => { return { ...prev, email: e.target.value } }) }} />
                            {fromErrors.email && <p className={styles.error}>{fromErrors.emailError}</p>}
                            <input type="password" value={loginDetails.password} id="password" placeholder="Password" onChange={(e) => { setLoginDetails(prev => { return { ...prev, password: e.target.value } }) }} />
                            {fromErrors.pass && <p className={styles.error}>{fromErrors.passError}</p>}
                        </>
                        :
                        <>
                            <input type="name" value={signUpDetails.name} id="name" placeholder="Full Name" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, name: e.target.value } }) }} />
                            {fromErrors.name && <p className={styles.error}>{fromErrors.nameError}</p>}
                            <input type="email" value={signUpDetails.email} id="email" placeholder="Email" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, email: e.target.value } }) }} />
                            {fromErrors.email && <p className={styles.error}>{fromErrors.emailError}</p>}
                            <input type="password" value={signUpDetails.password} id="password" placeholder="Password" onChange={(e) => { setSignUpDetails(prev => { return { ...prev, password: e.target.value } }) }} />
                            {fromErrors.pass && <p className={styles.error}>{fromErrors.passError}</p>}
                        </>
                    }
                    <button className={styles.loginbtn} onClick={execute}>{purpose === "login" ? `Login` : `SignUp`}</button>
                </form>
                <span onClick={() => { Authentication.loginmodal[0](false); Authentication.loginmodal[1]('login') }}>Continue as Guest</span>
            </div>
        </div>
    )
}