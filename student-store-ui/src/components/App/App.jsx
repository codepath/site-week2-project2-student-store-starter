import * as React from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import axios from 'axios';

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound";


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
        <Routes>
        <Route path="/" element={<div><Navbar /><Home products={products}/></div>}></Route>
        <Route path="/products/:productId" element={<div><Navbar /><ProductDetail products={products}/></div>}></Route>
        <Route path="*" element={<div><Navbar /><NotFound /></div>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
