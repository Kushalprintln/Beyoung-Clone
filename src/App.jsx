import AdLine from './AdLine';
import './App.css';
import NavOne from './NavOne';
import NavTwo from './NavTwo';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// IMPORTING CONTEXT;
import AuthContext from './AuthContext';
import LoginModal from './LoginModal';
function App() {
  // console.log('APP RERENDERED');
  // SETTING DATA FOR THE CONTEXT;
const [login,setlogin] = useState(false);
const [loginData,setLogInData] = useState('');
const [JWS,SetJWS] = useState('');
const [locwish,setlocwish] = useState([]);
const [modal,setmodal]= useState(false);
const [purpose,setperpose]= useState('login');

let token;
  function checkUser(){
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'));
      // console.log(user);
      setlogin(user.login);
      let userinfo = JSON.parse(user.info);
      // console.log(userinfo);
      setLogInData({...userinfo});
      SetJWS(user.jws);
      token = user.jws;
      getwishlist();
    }
  }
  
  async function getwishlist(){
    // REQUIRMENTS;
    // console.log('chekcing',token);
    const baseUrl = 'https://academics.newtonschool.co/';
    const getwish = 'api/v1/ecommerce/wishlist';
    const header = {projectID:'f104bi07c490','Content-Type': 'application/json' ,'Authorization': `Bearer ${token}`};
    const resp = await fetch(`${baseUrl}${getwish}`,{
      method:'GET',
      headers:header,
    })
    // console.log(resp);
    const wishlist = await resp.json();
    // console.log(wishlist.data.items);
    wishlist.data.items.map((ele)=>{
      // console.log(ele.products._id);
      setlocwish(prev => [...prev,ele.products._id])
    })
  }

  useEffect(()=>{
    checkUser();
  },[]);

  return (
    <>
      <AuthContext.Provider value={{
        loginmodal:[setmodal,setperpose],
        status:[login,setlogin],
        data:[loginData,setLogInData],
        jws:[JWS,SetJWS],
        wish:[locwish,setlocwish]
      }}>
      <AdLine/>
      <NavOne/>
      {modal && <LoginModal purpose={purpose}/>}
      <NavTwo/>
      <Outlet/>
      <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App;
