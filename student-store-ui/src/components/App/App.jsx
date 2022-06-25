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



  //global var
  let initialForm = {name: "", email: ""}


  // creating state variables
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]); 
  const [checkoutForm, setCheckoutForm] = useState([initialForm])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [showReceipt, setShowReceipt] = useState(false)
  const [receipt, setReceipt] = useState([])
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)
  
  
 


  function handleOnToggle() {
  }


  //handler logic to add item to cart
  function handleAddItemToCart(productId) {
    // console.log("shoppingCart before ADD:", shoppingCart)
    let value = shoppingCart.find((object) => object.itemId === productId)
    console.log("value is",value)
    if (value == undefined) {
      setShoppingCart((currentCart) => [
        ...currentCart, {itemId: productId, quantity: 1}
      ])
    }
    else{
      let cartCopy = shoppingCart.filter((object) => {
        return (object.itemId !== productId)
        })
        value.quantity += 1
        setShoppingCart(() => [
          ...cartCopy, {itemId: value.itemId, quantity: value.quantity}
        ])
    }
    // console.log("shoppingCart after ADD:", shoppingCart)
  }


  //handler logic to remove item from cart
  function handleRemoveItemFromCart(productId){
    // console.log("shoppingCart before DELETE:", shoppingCart)
    let value = shoppingCart.find((object) => object.itemId === productId)

    
    if (value != undefined) { // item not in shopping cart
      shoppingCart.map((object) => {
        if (object.itemId === productId) {
          if(object.quantity <= 1){
            let cartCopy = shoppingCart.filter((object) => {
              return (object.itemId !== productId)
              })
              setShoppingCart(() => [
                ...cartCopy
              ])
          }
          else if (object.quantity > 1){ // item already in cart
            let value = shoppingCart.find((object) => object.itemId === productId)
            value.quantity -= 1
            let cartCopy = shoppingCart.filter((object) => {
              return (object.itemId !== productId)
              })
              setShoppingCart(() => [
                ...cartCopy, {itemId: value.itemId, quantity: value.quantity}
              ])
          }
        }
      })
      // console.log("shoppingCart after DELETE:", shoppingCart)
    }
  }
  

  function handleOnCheckoutFormChange(name, value){
    if (name === "name" && checkoutForm.email != "") { //checkoutForm email is empty, no past information to reserve
      let oldFormEmail = checkoutForm.email
      setCheckoutForm({name: value, email: oldFormEmail})
    }
    else if (name === "name" && checkoutForm.email == ""){
      setCheckoutForm({name: value, email: ""})
    }
    else if (name === "email" && checkoutForm.name != ""){
      let oldFormName = checkoutForm.name
      setCheckoutForm({name: oldFormName, email: value})
    }
    else if (name === "email" && !checkoutForm.name == ""){
      setCheckoutForm({name: "", email: value})
    }


  function handleAddItemToCart(productId) {

    shoppingCart.forEach((item) => {
      if (productId in item) {
        item[productId] += 1
      }
      else {
        

      }
    })


  }




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



  }



  async function  handleOnSubmitCheckoutForm(){
    console.log("HANDLER RECEIVES:", checkoutForm)
    if (shoppingCart.length === 0 ){ //empty cart
      alert("No cart or items in cart found to checkout")
    }

    else if (!checkoutForm.name || !checkoutForm.email){ // missing user info
      alert("User info must include an email and name")
    }

    else{
        try {
          const response = await axios.post("http://localhost:3001/store", {user: checkoutForm, shoppingCart: shoppingCart})
          if (response.data) {
            console.log("response data is:", response.data)
            setReceipt(response.data)
            setCheckoutSuccess(true)
          } else {
            setError("Error posting")
            setCheckoutSuccess(false)
          }
        } catch (error) {
          console.log(error)
        } 
      


      setShowReceipt(true)
      setShoppingCart([])
      setCheckoutForm(initialForm)
    }


  }




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

        <Sidebar isOpen = {isOpen} setIsOpen = {setIsOpen} products = {products} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} checkoutForm ={checkoutForm} setCheckoutForm = {setCheckoutForm} 
                  handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} showReceipt = {showReceipt} setShowReceipt = {setShowReceipt} receipt = {receipt} 
                  checkoutSuccess = {checkoutSuccess} setCheckoutSuccess ={setCheckoutSuccess}/> 

        

        <Routes>
          <Route path = "/" element = {<Home products = {products} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} shoppingCart = {shoppingCart}/>}  />
          <Route path = "/products/:productId" element = {<ProductDetail products = {products} isFetching = {isFetching} setIsFetching = {setIsFetching} error = {error} setError = {setError}/>} /> 
          <Route path = "*" element = {<NotFound />}/> 
        </Routes> 
        <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
