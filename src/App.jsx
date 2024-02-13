// IMPORT REACT AND CSS
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTING REACT AND ROUTER HOOKS;
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// IMPORTING OHTER COMPONENTS
import AdLine from './AdLine';
import NavOne from './NavOne';
import NavTwo from './NavTwo';
import Footer from './Footer';
import LoginModal from './LoginModal';

// IMPORTING CONTEXT;
import AuthContext from './AuthContext';

// APP COMPONENT
function App() {
  // DECLEARING STATES;
  const [login, setlogin] = useState(false);
  const [loginData, setLogInData] = useState('');
  const [JWS, SetJWS] = useState('');
  const [locwish, setlocwish] = useState([]);
  const [loccart, setlocCart] = useState({ items: [] });
  const [modal, setmodal] = useState(false);
  const [purpose, setperpose] = useState('login');

  let token; // TOKEN

  // CHECKING IF USER ALREADY LOGGED WITH LOCAL STORAGE;
  function checkUser() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'));
      setlogin(user.login);
      let userinfo = JSON.parse(user.info);;
      setLogInData({ ...userinfo });
      SetJWS(user.jws);
      token = user.jws;
      getwishlist();
      getCartList();
    }
  }

  // REQUIRMENTS FOR MAKING API CALL;
  const baseURL = 'https://academics.newtonschool.co/';
  const getWishURL = 'api/v1/ecommerce/wishlist';
  const getCartURL = 'api/v1/ecommerce/cart';

  // GETTING WISHLIST IF USER IS LOGGEDIN;
  async function getwishlist() {
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
    const resp = await fetch(`${baseURL}${getWishURL}`, {
      method: 'GET',
      headers: header,
    })
    const wishlist = await resp.json();

    // SETTING WISHLIST IN LOCAL STATE;
    wishlist.data.items.map((ele) => {
      setlocwish(prev => [...prev, ele.products._id])
    })
  }

  // GETTING CARTLIST IF USER IS LOGGEDIN
  async function getCartList() {
    const header = { projectID: 'f104bi07c490', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
    const resp = await fetch(`${baseURL}${getCartURL}`, {
      method: 'GET',
      headers: header,
    })
    const cartList = await resp.json();

    // SETTING CARTLIST IN LOCAL STATE;
    setlocCart({ ...cartList.data, results: cartList.results });
  }

  // CHECKING USER IN USEEFFECT;
  useEffect(() => {
    checkUser();
  }, []);

  const notifyS = (message) => toast.success(message);
  const notifyE = (message) => toast.error(message);
  const notifyI = (message) => toast.info(message);
  const notifyW = (message) => toast.warn(message);

  //  APP COMPONENT
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: 'Zoom',
        />
      <AuthContext.Provider value={{
        loginmodal: [setmodal, setperpose],
        status: [login, setlogin],
        data: [loginData, setLogInData],
        jws: [JWS, SetJWS],
        wish: [locwish, setlocwish],
        cart: [loccart, setlocCart],
        notify:[notifyS,notifyE,notifyI,notifyW]
      }}>
        <AdLine />
        <NavOne />
        {modal && <LoginModal purpose={purpose} />}
        <NavTwo />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </>
  )
}

export default App;
