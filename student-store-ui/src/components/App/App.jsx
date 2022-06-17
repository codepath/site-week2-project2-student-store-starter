import * as React from "react"
import { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductView from "../ProductView/ProductView"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound"
import "./App.css"
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import axios from "axios"


export default function App() {
  //state variables
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [isFetching, setFetching] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("All Categories");


  useEffect(() => {
    axios.get('https://codepath-store-api.herokuapp.com/store').then(function(response) {
      if(response) {
        if(searchValue) {
          setProducts(response.data.products.filter((product) => product.name.toLowerCase().includes(searchValue) && (product.category === filter.toLowerCase() || filter === "All Categories")));
        } else {
          setProducts(response.data.products.filter((product) => (product.category === filter.toLowerCase() || filter === "All Categories")));
        }
      } else {
        setError("No products found from API");
      }
    }).catch(function(error) {
      setError(error);
    })
  }, [products, searchValue, filter])

  //on change, filter products
  function onSearchChange(evt) {
    setSearchValue(evt.target.value);
    //consider changing products here? 
    //setProducts(products.filter((product) => product.name.includes(evt.target.value)));
  }

  function onFilterClick(evt) {
    setFilter(evt.target.textContent);
    console.log(filter);

    //evt.target.classList.add("active");
  }

  
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="horizontal">
          <Sidebar />
          <Routes>
            <Route path="/" element={<main>
            <Home filter={filter} onFilterClick={onFilterClick} products={products} searchValue={searchValue} onSearchChange={onSearchChange}/>
          </main>}/>
          <Route path="/products/:productId" element={<ProductDetail products={products}/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        
        
      </BrowserRouter>
    </div>
  )
}
