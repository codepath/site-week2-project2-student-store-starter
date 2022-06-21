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

  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = React.useState('')
  const [activeCategory, setCategory] = React.useState(null)

  const [error, setError] = useState(null);


  useEffect(async () => {

    setIsFetching(true)
    
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        setProducts(response.data.products)
      } catch (error) {
        setError("Error fetching products.")
        setIsFetching(false)
      }
  });
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/" 
        element={
        <div>
          <Navbar />
          <Home products={products}
          search={search}
          setSearch={setSearch}
          activeCategory={activeCategory}
          setCategory={setCategory}/>
          <Sidebar />
        </div>}>
        </Route>
        <Route path="/products/:productId" 
        element={
        <div>
          <Navbar />
          <ProductDetail products={products}/>
          <Sidebar />
        </div>}>
        </Route>
        <Route path="*" 
        element={
        <div>
          <Navbar />
          <NotFound />
          <Sidebar />
        </div>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
