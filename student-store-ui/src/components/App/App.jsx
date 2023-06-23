import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import ProductDetails from "../ProductDetails/ProductDetails"


export default function App() {

  

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="products/:id" element={<ProductDetails/>}/> 
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

function HomePage(){

  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts]=useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products)
    });
  }, []);

  console.log("App", cartItems)

  return(
    <main>
      
          <Navbar />
          <Sidebar setCartItems={setCartItems} cartItems={cartItems}/>
          <Home products={products} setCartItems={setCartItems} cartItems={cartItems}/>
         
        </main>
  )
}