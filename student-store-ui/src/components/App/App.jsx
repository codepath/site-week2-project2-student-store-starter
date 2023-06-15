import * as React from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { useEffect, useState } from 'react';
import axios from 'axios'
import "./App.css"
import About from "../About/About"

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState([])
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)


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
          <Sidebar isOpen={false} shoppingCart={{}} products={products}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home products={products}/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
          <Navbar />
              {/* todo*/}
              
              {/* <Link to="/">Home</Link>
              <Link to="/products/productID">Product</Link>
              <Link to="*">None</Link> */}
        </BrowserRouter>
        </main>
      </div>
  )
}
