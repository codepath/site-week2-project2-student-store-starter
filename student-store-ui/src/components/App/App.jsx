import React, { useState } from "react"
import { BrowserRouter } from 'react-router-dom' 
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero";
import "./App.css"
import ProductCard from "../ProductCard/ProductCard"

export default function App() {
  const [products, setProducts] = useState([]);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          {/* <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  )
}
