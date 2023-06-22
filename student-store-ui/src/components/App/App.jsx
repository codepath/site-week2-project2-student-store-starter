import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"



export default function App() {

  const url = "http://localhost:3001/";
  const [products, setProducts] = useState([]);
  const [sidebar, setSideBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]) //the array should have itemId and Quantity
  const [checkoutForm, setCheckoutForm] = useState({}); // user's information that will be sent to the API when they checkout
  const [error, setError] = useState("there has been an error"); //used to display message when something goes wrong with api requests

  function handleAddQuantity(product) {
    const cartItem = shoppingCart?.find(item => item.id === product.id) // evaluates if the given product is already at the shoppingCart array or not
    if(cartItem) {
       // we need to increment 
       const updateCart = shoppingCart?.map(item => {

          if(item.id === product.id){

             return {...item, quantity: item.quantity + 1}
          }

          return item
       })

       setShoppingCart(updateCart)
    }

    else{

       setShoppingCart ([...shoppingCart, {...product, quantity: 1}])
    }
 } 
 function handleSubstractQuantity(product) {

    const cartItem = shoppingCart?.find(item => item.id === product.id) // evaluates if the given product is already at the shoppingCart array or not
    if(cartItem) {
       // we need to decrement 
       const updateCart = shoppingCart?.map(item => {

          if((item.id === product.id) && item.quantity > 0 ){

             return {...item, quantity: item.quantity - 1}
          }
          return item
       })
       const updatedCart = updateCart.filter((item) => item.quantity > 0); 
       setShoppingCart(updatedCart)
    }  
 }
 
 function getQuantity(product){

    // compare current product with products in shopping cart
    // if exists get quantity from shopping cart
    // else quantity = 0

    return shoppingCart?.map(item => {

       if(item.id === product.id){

          return item.quantity
       }

    })

 }
  
  
  
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.products.length > 0) {
          setProducts(response.data.products);
        } else {
          setError("No products found.");
        }
      })
      .catch((error) => {
        setError("Error occurred while fetching products.");
      });
  }, []);

  return (

    <div className="app">
      <BrowserRouter>
        <main>

          <Navbar />
          <Sidebar isOpen={sidebar} handleOnToggle={() => setSideBar(!sidebar)} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} products = {products} checkoutForm = {checkoutForm} />

          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts}  shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} handleAddQuantity = {handleAddQuantity} handleSubstractQuantity = {handleSubstractQuantity} getQuantity = {getQuantity} />} />
            <Route path="products/:id" element={<ProductDetail handleAddQuantity = {handleAddQuantity} handleSubstractQuantity = {handleSubstractQuantity} getQuantity = {getQuantity} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>} />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
