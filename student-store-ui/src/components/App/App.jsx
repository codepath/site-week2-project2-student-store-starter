import React, { useEffect, useState } from "react"
import { BrowserRouter } from 'react-router-dom' 
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios';
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      // console.log(response);
      setProducts(response.data.products);
    }
    catch (error) {
      console.log(error)
    }
  }, []);

  const handleAddItemToCart = (productId) => {
    console.log("add");
  }

  const handleRemoveItemToCart = (productId) => {
    console.log("remove");
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home
            products={products}
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        </main>
      </BrowserRouter>
    </div>
  )
}



// function Nav() {
//   return <div>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//   </div>
// }

// <div className="App">
//   return (

//   )
// </div>