import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import HeroBanner from "../Home/HeroBanner/HeroBanner"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState([])

  // const axios = require('axios'); 
  useEffect(() => {
    axios.get('https://codepath-store-api.herokuapp.com/store')
    .then((resp) => { setProducts(resp.data.products) })
    .catch(function (error) {
      setError(error)
    })
    if (products.length == 0){
      setError("length of products is 0")
    }
  }, [])

  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        
        <main>
          {/* YOUR CODE HERE! */}
          <div className="container">
            <Sidebar />
            <div className="wrapper">
              <div className="navwrapper">
                <Navbar />
              </div>
              <div className="home">
              <Routes>
                <Route path="/" element={<Home handleOnToggle/>} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </div>
              <Footer />
            </div>
          </div>
          
          
          {/* <HeroBanner/> */}
        </main>
        
      </BrowserRouter>
    </div>
  )
}
