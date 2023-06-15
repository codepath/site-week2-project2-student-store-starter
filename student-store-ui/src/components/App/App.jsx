import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"




export default function App() {
const url = "https://codepath-store-api.herokuapp.com/store";
const [products, setProducts] = useState([]);
const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    });
  }, []);

  return (
    <>
    <div className="app">
      <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
        <main>
          {/* {products?.map((product,index) => (<h1 key={index + product.className}>{product.name}</h1>))} */}
          <Navbar />
          <Sidebar />
          <Hero />
          <Search products={products} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Home products={products} searchValue={searchValue}/>
          {/* <ProductGrid/> */}
        </main>
      </BrowserRouter>
    </div>
    </>
  )
}


