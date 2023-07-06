import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import AppOverlay from "./AppOverlay"
import BuyNow from "../BuyNow/BuyNow"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "./NotFound"




export default function App() {
  const newUrl= 'http://localhost:3001/store'
  const [originalProducts, setOriginalProducts] = useState([]);

  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({})
  
  



  const quantsObj= {}
  useEffect(()=> {
    axios.get(newUrl).then((response) => {
      setOriginalProducts(response.data.products)
      setProducts(response.data.products)

      
      for (const product of response.data.products){
        quantsObj[product.id]= 0
      }

      setQuantities(quantsObj)
      
        })
  }, [])

  

  const [cart, setCart] = useState([]);

  function clearCart(){

    setCart([])
    setAtCheckout(false)
    setQuantities(quantsObj)
}
  
  
  return (
    <div className="app">
      <BrowserRouter>
        

        <main>
        <AppOverlay emptyQuantities={quantsObj} clearCart={clearCart} cart={cart}  setCart={setCart} quantities={quantities} setQuantities={setQuantities} originalProducts={originalProducts}/>
        <Routes>
          <Route path='/' element={<BuyNow cart={cart}  setCart={setCart} products={products} setProducts={setProducts} originalProducts= {originalProducts} quantities={quantities} setQuantities={setQuantities}/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='product/:id' element={<ProductDetail products={products} quantities={quantities} setQuantities={setQuantities}/>}/>
            <Route path='*' element={<NotFound/>}/>
            
            
       </Routes> 

       <Footer/>
         
        </main>
      </BrowserRouter>

    </div>
  )
}
