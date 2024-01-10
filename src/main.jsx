import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
      <Route index element={<Home/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  </Router>

)
