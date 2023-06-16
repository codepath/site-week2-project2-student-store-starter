import * as React from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { useEffect, useState } from 'react';
import axios from 'axios'
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  


  // fetch the data
  useEffect(() => {
    axios.get(url)
    .then(response => {setProducts(response.data.products)})
    .catch(error => {setProducts(error)})
  }, [])

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          
          <div className="container">
            <Routes>
              <Route path="/" element={<Home products={products}/>} />
              {/* <Route path="/about" element={<About/>} /> */}
              <Route path="/products/:id" element={<ProductDetail/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Sidebar isOpen={false} shoppingCart={{}} products={products}/>
          <Navbar />
        </BrowserRouter>
        </main>
      </div>
  )
}