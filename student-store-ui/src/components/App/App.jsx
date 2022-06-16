import * as React from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Modal from "../Modal/Modal";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./App.css"

export default function App() {

  let [products, setProducts] = useState([]);

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
          <Sidebar />
          <Home products={products} />
          <Modal />
        </main>
      </BrowserRouter>
    </div>
  )
}
