import React, { useState } from "react";
import styles from './LoginModal.module.css'
import loginImg from '../images/login-and-signup-image.jpg';
export default function LoginModal({close,purpose}){
    // console.log(purpose);
    const[loginDetails,setLoginDetails] = useState(
        {
            email : "",
            password : "",
            appType : "ecommerce"
        }
    );
    const[signUpDetails,setSignUpDetails] = useState(
        {
            name:"",
            email : "",
            password : "",
            appType : "ecommerce"
        }
    );
  
    // REQUIRMENTS;
    const baseUrl = 'https://academics.newtonschool.co/';
    const signupUrl = 'api/v1/user/signup';
    // const signingupURL = `${baseUrl}${signupUrl}`
    const loginUrl = 'api/v1/user/login';
    const header = {projectID:'f104bi07c490'};

    // SIGNUP FUNCTION;
    async function SignUp(){
        const resp = await fetch(`${baseUrl}${signupUrl}`,{
            method:'POST',
            headers:header,
            body: JSON.stringify({...signUpDetails})
        })
        console.log(resp);
    }
    // LOGIN FUNCTION;
    async function Login(){
        const resp = await fetch(`${baseUrl}${loginUrl}`,{
            method:'POST',
            headers:header,
            body: JSON.stringify({...loginDetails})
        })
    }
    // VALIDATION
    function execute(event){
        event.preventDefault();
        if(purpose==="login"){
            if(loginDetails.email === '' || loginDetails.password === ''){
                alert('Invalid Input');
                return;
            }
            try{
                Login();
            }catch(e){

            }
        }else{
            if(signUpDetails.name === ''  || signUpDetails.email === '' || signUpDetails.password === ''){
                alert('Invalid Input');
                return;
            }
            try{
                console.log(JSON.stringify(signUpDetails))
                SignUp();
            }catch(e){
                
            }
        }
    }
    return (
        <div className={styles.modalcontainer}>
            <div className={styles.modal}>
                <span className={styles.closemodal} onClick={()=>{close(false)}}>X</span>
                <img src={loginImg} alt="" />
                <form action="" className={styles.loginform}>
                    {purpose==="login" ?<h2>Login</h2> :<h2>Sign Up</h2>}
                    <p>Get Exciting Offers & Track Order</p>
                    {purpose==="login" ? 
                    <>
                        <input type="email" value={loginDetails.email} id="email" placeholder="Email" onChange={(e)=>{setLoginDetails(prev=>{return {...prev,email:e.target.value}})}} />
                        <input type="password" value={loginDetails.password} id="password" placeholder="Password" onChange={(e)=>{setLoginDetails(prev=>{return {...prev,password:e.target.value}})}}/>
                    </>
                    :
                    <>
                        <input type="name" value={signUpDetails.name} id="name" placeholder="Full Name" onChange={(e)=>{setSignUpDetails(prev=>{return {...prev,name:e.target.value}})}}/>
                        <input type="email" value={signUpDetails.email} id="email" placeholder="Email" onChange={(e)=>{setSignUpDetails(prev=>{return {...prev,email:e.target.value}})}}/>
                        <input type="password" value={signUpDetails.password} id="password" placeholder="Password" onChange={(e)=>{setSignUpDetails(prev=>{return {...prev,password:e.target.value}})}}/>
                    </>
                    }
                    <button className={styles.loginbtn} onClick={execute}>{purpose==="login" ? `Login` : `SignUp`}</button>
                </form>
                <span onClick={()=>{close(false)}}>Continue as Guest</span>
            </div>
        </div>
    )
}