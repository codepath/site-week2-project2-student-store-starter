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
  // const url= 'https://codepath-store-api.herokuapp.com/store' //replace url with our endpoint from server
  const newUrl= 'http://localhost:3001/store'
  const [originalProducts, setOriginalProducts] = useState([]);

  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({})
  
  




  useEffect(()=> {
    axios.get(newUrl).then((response) => {
      // console.log(rbbbbesponse)
      setOriginalProducts(response.data.products)
      setProducts(response.data.products)

      const quantsObj= {}
      for (const product of response.data.products){
        quantsObj[product.id]= 0
      }

      setQuantities(quantsObj)
    // console.log('yo',quantsObj)
      
        })
  }, [])


  
  return (
    <div className="app">
      <BrowserRouter>
        

        <main>
        <AppOverlay quantities={quantities} setQuantities={setQuantities} originalProducts={originalProducts}/>
        <Routes>
          <Route path='/' element={<BuyNow products={products} setProducts={setProducts} originalProducts= {originalProducts} quantities={quantities} setQuantities={setQuantities}/>}/>

            {/* <Route path='/' element={<Home className='home' products={products}/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/buy-now' element={<BuyNow products={products} setProducts={setProducts} originalProducts= {originalProducts}/>}/> */}
            <Route path='product/:id' element={<ProductDetail products={products} quantities={quantities} setQuantities={setQuantities}/>}/>
            <Route path='*' element={<NotFound/>}/>
            
            
       </Routes> 

       <Footer/>
         
        </main>
      </BrowserRouter>

    </div>
  )
}
