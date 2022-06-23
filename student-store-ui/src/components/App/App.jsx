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
 


  function handleOnToggle() {
  }


  function handleAddItemToCart(productId) {
    console.log("shoppingCart before:", shoppingCart)
    var value = shoppingCart.find((object) => {
      if (object.itemId === productId){
        return true
      }
    })
    if (value === undefined) {
      shoppingCart.push({ itemId: productId, quantity: 1})
    }
    else{
      shoppingCart.map((object) => {
        if (object.itemId === productId) {
          object.quantity += 1
        }
      })
    }
    console.log("shoppingCart after:", shoppingCart)
  }


  function


  const getProducts = async () => {
    setIsFetching(true)
    try {
      const response = await axios.get("http://localhost:3001/store")
      if (response?.data?.allProducts) {
        setProducts(response.data.allProducts)
      } else {
        setError("Error getting products list from store.")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    
    getProducts()
  }, [])



  return (
    <div className="app">
      <BrowserRouter>
      <main>
        <Navbar />
        <Sidebar isOpen = {isOpen} setIsOpen = {setIsOpen} products = {products} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} checkoutForm ={checkoutForm} setCheckoutForm = {setCheckoutForm}/> 
        <Routes>
          <Route path = "/" element = {<Home products = {products} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} handleAddItemToCart = {handleAddItemToCart}/>}  />
          <Route path = "/products/:productId" element = {<ProductDetail products = {products} isFetching = {isFetching} setIsFetching = {setIsFetching} error = {error} setError = {setError}/>} /> 
          <Route path = "*" element = {<NotFound />}/> 
        </Routes> 
        <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
