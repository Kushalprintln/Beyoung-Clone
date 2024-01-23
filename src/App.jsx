import AdLine from './AdLine';
import './App.css'
import NavOne from './NavOne';
import NavTwo from './NavTwo';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
function App() {
  const basicDom = 'https://academics.newtonschool.co/';
  const categoriesApi = 'api/v1/ecommerce/clothes/categories';
  const productApi = 'api/v1/ecommerce/clothes/products';
  const productwomen = 'api/v1/ecommerce/clothes/products?filter={"gender":"Women"}'
  const catURL = `${basicDom}${categoriesApi}`;
  const proURL = `${basicDom}${productApi}`;
  const proWomenURL = `${basicDom}${productwomen}`;
  const header = {projectId:'f104bi07c490'};
  const [catagories,setCat] = useState([]);

  async function getCatData(){
    let resp = await fetch(catURL,{
      method:'GET',
      headers:header
    });
    // console.log(resp);
    let catdata = await resp.json();
    // console.log(catdata);
    // console.log(catdata.data);
    setCat(catdata.data);
    let prores = await fetch(proURL,{
      method:'GET',
      headers: header
    })
  }
  useEffect(()=>{
    getCatData();
  },[])

  return (
    <>
      <AdLine/>
      <NavOne/>
      <NavTwo/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
