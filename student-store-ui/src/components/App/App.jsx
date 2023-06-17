import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../Home/Home"
import "./App.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import AppOverlay from "./AppOverlay"
import BuyNow from "../BuyNow/BuyNow"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "./NotFound"




export default function App() {
  const url= 'https://codepath-store-api.herokuapp.com/store'

  const [originalProducts, setOriginalProducts] = useState([]);

  const [products, setProducts] = useState([]);



  useEffect(()=> {
    axios.get(url).then((response) => {
      setOriginalProducts(response.data.products)
      setProducts(response.data.products)
    })
  }, [])


  
  return (
    <div className="app">
      <BrowserRouter>
        

        <main>
        <AppOverlay/>
        <Routes>
            <Route path='/' element={<Home className='home' products={products}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/buy-now' element={<BuyNow products={products} setProducts={setProducts} originalProducts= {originalProducts}/>}/>
            <Route path='product/:id' element={<ProductDetail products={products}/>}/>
            <Route path='*' element={<NotFound/>}/>
            
            
       </Routes> 

       <Footer/>
         
        </main>
      </BrowserRouter>

    </div>
  )
}
