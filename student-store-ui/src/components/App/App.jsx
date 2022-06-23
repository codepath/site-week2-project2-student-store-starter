import * as React from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import axios from 'axios';

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound";


import "./App.css"


export default function App() {

  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});

  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = React.useState('')
  const [activeCategory, setCategory] = React.useState(null)

  const [error, setError] = useState(null);

  const [checkoutError, setCheckoutError] = React.useState("")
  const [getReceipt, setGetReceipt] = React.useState(false)
  const [order, setOrder] = React.useState({})
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: ""
  })

  const handleOnToggle = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen)
  }

  const handleAddItemToCart = (productId) => {
    if (shoppingCart.hasOwnProperty(productId)) {
      setShoppingCart((oldShoppingCart) => ({...oldShoppingCart,[productId]:oldShoppingCart[productId] + 1}))
    }
    else {
      setShoppingCart((oldShoppingCart) => ({...oldShoppingCart, [productId]: 1}))
    }

  }

  const handleRemoveItemFromCart = (productId) => {
    
    const newShoppingCart = {...shoppingCart, [productId]:shoppingCart[productId] - 1}

    if (newShoppingCart[productId] == 0) {
      delete newShoppingCart[productId]
    }

    setShoppingCart(newShoppingCart)
  }

  const handleOnCheckoutFormChange = (name, value) => {
    let newCheckoutForm = {...checkoutForm}
    newCheckoutForm[name] = value
    setCheckoutForm(newCheckoutForm)
    setCheckoutError("")
  }

  const handleOnSubmitCheckoutForm = () => {

    if (Object.keys(shoppingCart).length == 0) {
      setCheckoutError("No items in shopping cart")
      return;
    }

    if (checkoutForm.name == "" && checkoutForm.email == "") {
      setCheckoutError("No name and email")
      return;
    } else if (checkoutForm.name == "") {
      setCheckoutError("No name")
      return;
    } else if (checkoutForm.email == "") {
      setCheckoutError("No email")
      return;
    }

    let cart = []

    for (const item in shoppingCart){
      cart.push({itemId: item, quantity: shoppingCart[item]})
    }
    
    axios.post("https://codepath-store-api.herokuapp.com/store", 
    { 
      user:
      {
        name: checkoutForm.name,
        email: checkoutForm.email
      },
      shoppingCart: cart
    })
    .then(res => {
      setShoppingCart({})
      setCheckoutForm({name:"", email:""})
      setGetReceipt(true)
      setOrder(res.data.purchase)
    })
}

  useEffect(async () => {

    setIsFetching(true)
    
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        setProducts(response.data?.products)
      } catch (error) {
        setError("Cannot fetch products.")
      }

      setIsFetching(false)
  }, []);
  
  return (
    <div className="app">
      
      <BrowserRouter>
      
        <Routes>
          
        <Route path="/" 
        element={
        <div>
          <Navbar />
          <Sidebar 
          setIsOpen={setIsOpen}
          order={order} 
          getReceipt={getReceipt} 
          setGetReceipt={setGetReceipt}
          isOpen={isOpen} 
          handleOnToggle={handleOnToggle} 
          shoppingCart={shoppingCart} 
          products={products} 
          checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
          checkoutError={checkoutError} />
          <Home 
          setIsOpen={setIsOpen}
          products={products}
          search={search}
          setSearch={setSearch}
          activeCategory={activeCategory}
          setCategory={setCategory}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}/>
          
        </div>}>
        </Route>
        <Route path="/products/:productId" 
        element={
        <div>
          <Navbar />
          <ProductDetail products={products}/>
          <Sidebar 
          setIsOpen={setIsOpen}
          order={order} 
          getReceipt={getReceipt} 
          setGetReceipt={setGetReceipt}
          isOpen={isOpen} 
          handleOnToggle={handleOnToggle} 
          shoppingCart={shoppingCart} 
          products={products} 
          checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
          checkoutError={checkoutError} />
        </div>}>
        </Route>
        <Route path="*" 
        element={
        <div>
          <Navbar />
          <NotFound />
          <Sidebar 
          setIsOpen={setIsOpen}
          order={order} 
          getReceipt={getReceipt} 
          setGetReceipt={setGetReceipt}
          isOpen={isOpen} 
          handleOnToggle={handleOnToggle} 
          shoppingCart={shoppingCart} 
          products={products} 
          checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
          checkoutError={checkoutError} />
        </div>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
