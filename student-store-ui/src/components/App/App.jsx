import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import { ProductDetail } from "../ProductDetail/ProductDetail"
import axios from "axios"

import "./App.css"

export default function App() {
  const[products, setProducts] = useState([])
  const[isFetching, setIsFetching] = useState(false)
  const[error, setError] = useState('')
  const[isOpen, setIsOpen] = useState(false)
  const[shoppingCart, setShoppingCart] = useState([])
  const[checkoutForm, setCheckoutForm] = useState(null)
  
  useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store").then(res => {
      console.log(res)
      setProducts(res.data.products)
    }).catch(err => {
      console.log(err)
      setError(err)
    })
  }, [])

  const handleOnToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle}/>
          <Routes>
            <Route path="/" element={<Home products={products} />}/>
            <Route path="/products/:productId" element={<ProductDetail />}/>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
