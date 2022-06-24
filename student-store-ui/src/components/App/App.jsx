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
  
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState([])
  const URL = 'https://codepath-store-api.herokuapp.com/store'

  useEffect(() => {
    const getData = async() => {
      setIsFetching(true)
      try{
        const {data} = await axios.get(URL);
        setProducts(data.products)
      }
      catch(err){
        setError(err)
      }
      if (products.length == 0){
        setError("no products")
      }
    }
    getData();
    setIsFetching(false)
  }, []);

  useEffect(() => {
    if (products) {
      setIsFetching(false);
    }
  }, [products]);

  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  }

  function handleAddItemToCart(productId) {

    for (let i = 0; i<shoppingCart.length; i++){
      if (shoppingCart[i].itemId == productId){
        
        shoppingCart[i].quantity += 1;
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
    const newItem = {
      itemId: productId,
      quantity: 1,
      key: productId,
    }
    setShoppingCart([...shoppingCart, newItem])
  }

  function handleRemoveItemFromCart(productId) {
    // if (shoppingCart.isArray(productId) == true){
      for (let i = 0; i<shoppingCart.length; i++){
        if (shoppingCart[i].itemId == productId){
          if (shoppingCart[i].quantity -1 == 0){
            shoppingCart.splice(i,1)
            setShoppingCart([...shoppingCart])
          }
          else{
            shoppingCart[i].quantity -=1 
            setShoppingCart([...shoppingCart])
          }
        }
      // }
    }
  }

  function handleOnCheckoutFormChange({name, value}){
    setCheckoutForm([...checkoutForm, {name: name, value: value}])
    // <CheckoutForm name = {name} value = {value}/>
  }

  function handleOnSubmitCheckOutForm(){
    let userOrder = {
      user: checkoutForm,
      shoppingCart: shoppingCart
    }

    axios.post(URL, { userOrder
    })
    .then((response) => {
      
    }, (error) => {
      
    });
  }

  return (
    <div className="app">
      <BrowserRouter>
        
        <main>
          {/* YOUR CODE HERE! */}
          <div className="container">
            <Sidebar isOpen = {isOpen} shoppingCart ={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange ={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckOutForm} handleOnToggle = {handleOnToggle}/>
            <div className="wrapper">
              <div className="navwrapper">
                <Navbar />
              </div>
              <div className="home">
              <Routes>
                <Route path="/" element={<Home products = {products} handleOnToggle = {handleOnToggle} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} shoppingCart = {shoppingCart}/>} />
                <Route path="/products/:productId" element={<ProductDetail setError={setError} products ={products} />} />
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
