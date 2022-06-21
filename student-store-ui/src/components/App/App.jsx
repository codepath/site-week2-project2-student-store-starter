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
  const[type, setType] = useState('')
  const[search, setSearch] = useState('')
  const[isFetching, setIsFetching] = useState(false)
  const[error, setError] = useState('')
  const[isOpen, setIsOpen] = useState(false)
  const[shoppingCart, setShoppingCart] = useState([])
  const[checkoutForm, setCheckoutForm] = useState(null)
  
  useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store").then(res => {
      let newProduct = res.data.products
      if (search !== ''){
        setProducts(newProduct = newProduct.filter((product) => {
          return product.name.toLowerCase().includes(search)
        })) 
      } else {
        setProducts(newProduct)
      }
      if (type !== ''){
        setProducts(newProduct = newProduct.filter((product) => {
          return product.category === type
        }))
      }
      
    }).catch(err => {
      console.log(err)
      setError(err)
    })
  }, [search, type])

  const handleOnToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleAddItemToCart = (productId) => {
    let prodIdx = shoppingCart.findIndex(item => item.itemId === productId)
    if (prodIdx != -1) {
      let newCart = [...shoppingCart]
      newCart[prodIdx].quantity += 1
      setShoppingCart(newCart)
    }
    else {
      let newProduct = {itemId: productId, quantity: 1}
      setShoppingCart([...shoppingCart, newProduct])
    }
    console.log(shoppingCart)
  }

  const handleRemoveItemFromCart = (productId) => {
    let prodIdx = shoppingCart.findIndex(item => item.itemId === productId)
    if (prodIdx != -1) {
      let newCart = [...shoppingCart]
      newCart[prodIdx].quantity -= 1
      if (newCart[prodIdx].quantity == 0){
        newCart.splice(prodIdx, 1)
        setShoppingCart(newCart)
      } else {
        setShoppingCart(newCart)
      }
    }
    console.log(shoppingCart)
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar products={products} shoppingCart={shoppingCart} isOpen={isOpen} handleOnToggle={handleOnToggle}/>
          <Routes>
            <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} setSearch={setSearch} setType={setType} type={type}/>}/>
            <Route path="/products/:productId" element={<ProductDetail />}/>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
