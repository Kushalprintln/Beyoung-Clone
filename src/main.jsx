// IMPORITNG REACT, REACTDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORTING ROUTER HOOKS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// IMPORTING OTHER COMPONENTS
import App from './MainPages/App.jsx'
import Home from './MainPages/Home.jsx'
import SearchPage from './MainPages/SearchPage.jsx'
import ProductPage from './MainPages/ProductPage.jsx'
import MyAccount from './MyAccoutPages/MyAccount.jsx'
import Order from './MyAccoutPages/Order.jsx'
import Address from './MyAccoutPages/Address.jsx'
import Profile from './MyAccoutPages/Profile.jsx'
import Wishlist from './MyAccoutPages/Wishlist.jsx'
import Coupon from './MyAccoutPages/Coupon.jsx'
import Checkout from './CheckoutPages/Checkout.jsx'
import Cart from './CheckoutPages/Cart.jsx'
import Shipping from './CheckoutPages/Shipping.jsx'
import Payment from './CheckoutPages/Payment.jsx'
import ErrorPage from './Errorpage/ErrorPage.jsx'
import ThankYou from './CheckoutPages/ThankYou.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='search/:gender' element={<SearchPage />} />
        <Route path='search/:gender/:subCategory' element={<SearchPage />} />
        <Route path=':productID' element={<ProductPage />} />
        <Route path='/myaccount' element={<MyAccount />}>
          <Route index element={<Order />} />
          <Route path='order' element={<Order />} />
          <Route path='address' index element={<Address />} />
          <Route path='profile' index element={<Profile />} />
          <Route path='wishlist' index element={<Wishlist />} />
          <Route path='coupon' index element={<Coupon />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/checkout' element={<Checkout />}>
          <Route index element={<Cart />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='payment' element={<Payment />} />
          <Route path='' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='Thankyou' element={<ThankYou />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </Router>
)
