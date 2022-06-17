import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"

import axios from "axios"

export default function App() {


  // creating state variables
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]); 
  const [checkoutForm, setCheckoutForm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")



  useEffect(() => {
    const getProducts = async () => {
      setIsFetching(true)
      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
        if (response.data.products) {
          setProducts(response.data.products)
        } else {
          setError("Error getting products list from store.")
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }
    getProducts()
  }, [])
  console.log(products)





  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Sidebar /> 
        <Routes>
          <Route path = "/" element = {<Home products = {products} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>} />
          <Route path = "/products/:productId" element = {<ProductDetail isFetching = {isFetching} setIsFetching = {setIsFetching} error = {error} setError = {setError}/>} /> 
          <Route path = "*" element = {<NotFound />}/> 
        </Routes> 
        <Footer/>

      </BrowserRouter>
    </div>
  )
}
