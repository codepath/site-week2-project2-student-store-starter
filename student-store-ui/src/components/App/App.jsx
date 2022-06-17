import * as React from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {

  let [products, setProducts] = useState([]);
  let [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
    } else {
      setSidebarOpen(false)
    }
  }

  const closeHandler = () => {
    setSidebarOpen(false)
  }

  let sidebar;
  if (sidebarOpen) {
    sidebar = <Sidebar close={closeHandler} sidebar={"sidebar"}/>
  }


  useEffect(async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        setProducts(response.data.products)
      } catch (error) {
        console.error(error);
      }
  });
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <button onClick={openHandler}>Open Shopping Cart</button>
          {sidebar}
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  )
}
