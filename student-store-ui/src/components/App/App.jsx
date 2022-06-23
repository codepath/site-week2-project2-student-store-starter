import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { NotFound } from "../NotFound/NotFound"
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
  const[checkoutForm, setCheckoutForm] = useState({name: '', email: ''})
  const[subtotalPrice, setSubtotalPrice] = useState(0)
  const[taxPrice, setTaxPrice] = useState(0)
  const[totalPrice, setTotalPrice] = useState(0)
  
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
    setSubtotalPrice(subtotalPrice + products[productId - 1].price)
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
      setSubtotalPrice(subtotalPrice - products[productId - 1].price)
    }
  }

  useEffect(() => {
    setTaxPrice(subtotalPrice * .0875)
    setTotalPrice(taxPrice + subtotalPrice)
  }, [subtotalPrice, taxPrice])

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({...checkoutForm, [name]: value})
    console.log(checkoutForm)
  }

  const handleOnSubmitCheckoutForm = () => {
    axios.post('https://codepath-store-api.herokuapp.com/store', {
      user: {
        name: checkoutForm.name,
        email: checkoutForm.email
      },
      shoppingCart: shoppingCart
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar 
            products={products} 
            shoppingCart={shoppingCart} 
            subtotalPrice={subtotalPrice} 
            taxPrice={taxPrice} 
            totalPrice={totalPrice} 
            checkoutForm={checkoutForm} 
            isOpen={isOpen} 
            handleOnToggle={handleOnToggle} 
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
          <Routes>
            <Route path="/" 
              element={
              <Home 
                products={products} 
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart={handleRemoveItemFromCart} 
                setSearch={setSearch} 
                setType={setType} 
                type={type}
                shoppingCart={shoppingCart}
              />}
            />
            <Route path="/products/:productId" 
              element={
              <ProductDetail
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart={handleRemoveItemFromCart}
              />}
            />
            <Route path="*" element={<NotFound />}/>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
