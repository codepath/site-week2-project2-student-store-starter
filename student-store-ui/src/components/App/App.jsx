import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
// import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";



import "./App.css";

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState();
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products)
    });
  }, []);

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value)
  // }


  return (
    <div className="app">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes> */}
        <main>
          <Navbar />
          <Hero />
          <Search products={products} searchValue={searchValue} setSearchValue={setSearchValue} setProducts={setProducts}/>
          <Sidebar />
          <ProductGrid products={products} searchValue={searchValue}/>
          {/* <Home products={products} searchValue={searchValue}/> */}
          <About />
        </main>
      </BrowserRouter>
    </div>
  );
}
