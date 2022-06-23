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
  const URL = 'https://codepath-store-api.herokuapp.com/store'

  // const axios = require('axios'); 
  async function getData(){
    setIsFetching(true)
    axios.get(URL).then((resp) => { setProducts(resp.data.products) })
    .catch(function (error) {
      setError(error)
    })
    if (products.length == 0){
      setError("length of products is 0")
    }
  }
  console.log('resp.data.products: ', resp.data.products);
  console.log('resp.data.products: ', resp.data);
  console.log('products: ', products);

  useEffect(() => {
    const start = async () => {
      await getData();
    };
    start();
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
    for (i = 0; i<shoppingCart.length; i++){
      if (shoppingCart[i].itemId = productId.itemId){
        shoppingCart[i].quantity += 1;
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
    productId.quantity = 1
    setShoppingCart([...shoppingCart, productId])
  }


  function handleRemoveItemFromCart(productId) {
    if (shoppingCart.isArray(productId) == true){
      for (i = 0; i<shoppingCart.length; i++){
        if (shoppingCart[i].itemId = productId.itemId){
          if (shoppingCart[i].quantity -1 == 0){
            shoppingCart.splice(i)
            setShoppingCart([...shoppingCart])
          }
          else{
            shoppingCart[i].quantity -=1 
            setShoppingCart([...shoppingCart])
          }
        }
      }
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
      console.log(response);
    }, (error) => {
      console.log(error);
    });

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
                <Route path="/" element={<Home products handleOnToggle handleAddItemToCart handleRemoveItemFromCart/>} />
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
