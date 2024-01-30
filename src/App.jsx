import AdLine from './AdLine';
import './App.css'
import NavOne from './NavOne';
import NavTwo from './NavTwo';
import Footer from './Footer';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// IMPORTING CONTEXT;
import AuthContext from './AuthContext';
function App() {
  // SETTING DATA FOR THE CONTEXT;
const [login,setlogin] = useState(false);
const [loginData,setLogInData] = useState('');
const [JWS,SetJWS] = useState('');
  return (
    <>
      <AuthContext.Provider value={{
        status:[login,setlogin],
        data:[loginData,setLogInData],
        jws:[JWS,SetJWS]
      }}>
      <AdLine/>
      <NavOne/>
      <NavTwo/>
      <Outlet/>
      <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App;
