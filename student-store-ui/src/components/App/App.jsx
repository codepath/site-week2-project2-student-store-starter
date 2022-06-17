import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

export default function App() {

const[products, setProducts] = React.useState([])  

const [isFetching, setIsFetching]=React.useState(false)

const [error, setError]=useState(null)



const [isOpen, setIsOpen] = React.useState(false)

function handleOnToggle(){
  setIsOpen(!isOpen)
}

function handleAndItemToCart(){

}

function handleRemoveItemFromCart(){

}

function handleOnCheckoutForm(){

}

function handleOnSubmitCheckoutForm(){

}



React.useEffect(() => {
  const getProducts = async () => {
    try {
      // const res = await axios.get("http://localhost:3001/store")
      const res = await axios.get("https://codepath-store-api.herokuapp.com/store")
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
          <Sidebar />
          <Routes> 
          {/* <Route path="/products/:productId" element={<ProductDetail />} />  */}
            <Route exact path = "/" 
            element={<Home 

              products={products} 
            
            />} />

           
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
