import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
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
      <Route path='*' element={<ErrorPage/>}/>
      </Route>
      <Route path='/checkout' element={<Checkout/>}>
        <Route index path='cart' element={<Cart/>}/>
        <Route index path='shipping' element={<Shipping/>}/>
        <Route index path='payment' element={<Payment/>}/>



        <Route path='' element={<ErrorPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>
  </Router>
)
