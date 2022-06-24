import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


export default function App() {

const[products, setProducts] = React.useState([])  

const [isFetching, setIsFetching]=React.useState(false)

const [error, setError]=useState(null)

const [shoppingCart, setShoppingCart] = useState([])

const [checkout, isCheckout] = useState([]);

const [isOpen, setIsOpen] = React.useState(false)

const [checkoutForm, setCheckoutForm] = useState({email: null, name: null});

function handleOnToggle(){
  setIsOpen(!isOpen)
}

console.log(handleAddItemToCart)
function handleAddItemToCart(productId) {
  
  if(shoppingCart.some(item => item.id === productId)) {

    const index = shoppingCart.findIndex(items => items.id === productId);
    let item = shoppingCart[index];
    item.quantity++;

    setShoppingCart([...shoppingCart.slice(0, index), item, ...shoppingCart.slice(index+1, shoppingCart.length)]);
    
  } else {
    setShoppingCart(shoppingCart => [...shoppingCart, {id: productId, quantity: 1}]);
    
  }
  
}

React.useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/store")
      //const res = await axios.get("https://codepath-store-api.herokuapp.com/store")
      const products = res.data 
      if (products) {
 
        setProducts(products.products)
      }
      else {
        setError(new Error("No Products returned!"))
        console.log("nothing")
      }
    } catch(err) {
      setError(err)
    }
  }
  getProducts()

}, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} setIsOpen={setIsOpen} shoppingCart={shoppingCart} products={products}/>
          <Routes> 
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  shoppingCart={shoppingCart}
                />
              }
            />
            <Route path="/products/:productId" element={<ProductDetail products={products} handleAddItemToCart={handleAddItemToCart}/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
