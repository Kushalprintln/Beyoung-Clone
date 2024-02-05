// IMPORITNG REACT, REACTDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORTING ROUTER HOOKS
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// IMPORTING OTHER COMPONENTS
import App from './App.jsx'
import Home from './Home.jsx'
import SearchPage from './SearchPage.jsx'
import ProductPage from './ProductPage.jsx'
import MyAccount from './MyAccount.jsx'
import Order from './Order.jsx'
import Address from './Address.jsx'
import Profile from './Profile.jsx'
import Wishlist from './Wishlist.jsx'
import Coupon from './Coupon.jsx'
import Checkout from './Checkout.jsx'
import Cart from './Cart.jsx'
import Shipping from './Shipping.jsx'
import Payment from './Payment.jsx'
import ErrorPage from './ErrorPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
      <Route index element={<Home/>}/>
      <Route path='search/:gender' element={<SearchPage/>}/>
      <Route path='search/:gender/:subCategory' element={<SearchPage/>}/>
      <Route path=':productID' element={<ProductPage/>}/>
      <Route path='/myaccount' element={<MyAccount/>}>
        <Route index element={<Order/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='address' index element={<Address/>}/>
        <Route path='profile' index element={<Profile/>}/>
        <Route path='wishlist' index element={<Wishlist/>}/>
        <Route path='coupon' index element={<Coupon/>}/>
      </Route>
      <Route path='/checkout' element={<Checkout/>}>
        <Route index element={<Cart/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='shipping' element={<Shipping/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='' element={<ErrorPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  </Router>
)
